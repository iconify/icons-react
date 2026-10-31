import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q51yqcd8a.css';
import '../../css/s/st-jtccqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q51yqcd8a"/><path class="st-jtccqc"/></g>`,
		"fallback": "coolicons:syringe-duotone-round",
	});
}

export default Component;
