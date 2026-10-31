import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-imhsbzy.css';
import '../../css/z/zsywpudra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-imhsbzy"/><path class="zsywpudra"/></g>`,
		"fallback": "coolicons:search-duotone-round",
	});
}

export default Component;
