import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i07yc3wsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i07yc3wsb"/>`,
		"fallback": "thesvg:october-cms",
	});
}

export default Component;
