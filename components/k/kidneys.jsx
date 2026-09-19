import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyjx8o0yy.css';
import '../../css/g/ge282zboa.css';
import '../../css/a/ai13k44wk.css';
import '../../css/i/i1imx_8qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lyjx8o0yy"/><path class="ge282zboa"/><path class="ai13k44wk"/><path class="i1imx_8qa"/></g>`,
		"fallback": "hugeicons:kidneys",
	});
}

export default Component;
