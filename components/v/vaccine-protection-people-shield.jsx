import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jtybx7bnc.css';
import '../../css/m/mtc995bac.css';
import '../../css/c/cjriokfje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jtybx7bnc"/><path class="mtc995bac"/><path class="cjriokfje"/></g>`,
		"fallback": "covid:vaccine-protection-people-shield",
	});
}

export default Component;
