import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s68tuuboa.css';
import '../../css/o/ou52yzkxl.css';
import '../../css/f/f5p5g2ben.css';
import '../../css/i/i2qc891_s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s68tuuboa"/><path class="ou52yzkxl"/><path class="f5p5g2ben"/><path class="i2qc891_s"/></g>`,
		"fallback": "streamline-color:pathfinder-intersect",
	});
}

export default Component;
