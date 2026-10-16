import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ivg4zobup.css';
import '../../css/r/r65y5_b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ivg4zobup"/><path class="r65y5_b-n"/></g>`,
		"fallback": "andrsrxn:sound-wave-sparkle",
	});
}

export default Component;
