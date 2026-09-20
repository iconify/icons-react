import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xic0yhb9p.css';
import '../../css/v/vh7anfb6w.css';
import '../../css/f/f93u32esc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xic0yhb9p"/><path class="vh7anfb6w"/><path class="f93u32esc"/></g>`,
		"fallback": "solar:sofa-3-linear",
	});
}

export default Component;
