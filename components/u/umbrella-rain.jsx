import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zogzlnw3b.css';
import '../../css/t/tyrw2cb4b.css';
import '../../css/f/fma2okkxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zogzlnw3b"/><path class="tyrw2cb4b"/><path class="fma2okkxr"/></g>`,
		"fallback": "streamline-cyber-color:umbrella-rain",
	});
}

export default Component;
