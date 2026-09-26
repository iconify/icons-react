import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w62m_bbfr.css';
import '../../css/x/x4376obid.css';
import '../../css/r/rhq2s9oka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w62m_bbfr"/><path class="x4376obid"/><path class="rhq2s9oka"/></g>`,
		"fallback": "solar:text-field-focus-bold-duotone",
	});
}

export default Component;
