import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tw6wx2bwa.css';
import '../../css/f/fgh59rpxr.css';
import '../../css/s/s65bc9b3e.css';
import '../../css/f/fwg0yzbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tw6wx2bwa"/><path class="fgh59rpxr"/><path class="s65bc9b3e"/><path class="fwg0yzbur"/></g>`,
		"fallback": "streamline-cyber-color:temperature-high",
	});
}

export default Component;
