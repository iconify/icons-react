import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/q/qbi4bdc_j.css';
import '../../css/e/eciyvwb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="qbi4bdc_j"/><path class="eciyvwb0b"/></g>`,
		"fallback": "streamline-ultimate:temperature-celsius",
	});
}

export default Component;
