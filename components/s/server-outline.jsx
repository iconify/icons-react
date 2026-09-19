import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mud1l5kug.css';
import '../../css/t/tjyxhabsq.css';
import '../../css/c/crqj_mbjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="mud1l5kug"/><path class="tjyxhabsq"/><path class="crqj_mbjp"/>`,
		"fallback": "famicons:server-outline",
	});
}

export default Component;
