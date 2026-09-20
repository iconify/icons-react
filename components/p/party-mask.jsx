import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z35gppbmd.css';
import '../../css/g/gkvwxhkoj.css';
import '../../css/f/fi9dlvxvo.css';
import '../../css/o/o_vhdacth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z35gppbmd"/><path class="gkvwxhkoj"/><path class="fi9dlvxvo"/><path class="o_vhdacth"/></g>`,
		"fallback": "streamline-ultimate-color:party-mask",
	});
}

export default Component;
