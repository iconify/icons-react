import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zupdwtx1d.css';
import '../../css/h/hf1f7cciq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zupdwtx1d"/><path class="hf1f7cciq"/></g>`,
		"fallback": "solar:magic-wand-line-duotone",
	});
}

export default Component;
