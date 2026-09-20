import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i1hcqhrwg.css';
import '../../css/u/u5ce_8btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i1hcqhrwg"/><path class="u5ce_8btl"/></g>`,
		"fallback": "streamline-ultimate:lab-tube-experiment",
	});
}

export default Component;
