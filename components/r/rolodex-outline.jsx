import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfyj_sbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfyj_sbmw"/>`,
		"fallback": "mdi:rolodex-outline",
	});
}

export default Component;
