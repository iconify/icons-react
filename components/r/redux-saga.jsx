import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6fg1dn4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6fg1dn4a"/>`,
		"fallback": "thesvg-color:redux-saga",
	});
}

export default Component;
