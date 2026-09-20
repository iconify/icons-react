import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nguzg_bgh.css';
import '../../css/n/nrevc1bam.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nguzg_bgh"/><path class="nrevc1bam"/></g>`,
		"fallback": "streamline-flex-color:skull-2",
	});
}

export default Component;
