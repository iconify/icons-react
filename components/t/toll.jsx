import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwuz_u2dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwuz_u2dz"/>`,
		"fallback": "thesvg-color:toll",
	});
}

export default Component;
