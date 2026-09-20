import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2n5tfj3d.css';
import '../../css/o/otbcz-b5x.css';
import '../../css/q/qhmpv3bci.css';
import '../../css/c/c17uzvb_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2n5tfj3d"/><path class="otbcz-b5x"/><path class="qhmpv3bci"/><path class="c17uzvb_m"/></g>`,
		"fallback": "streamline-color:pathfinder-minus-front-1",
	});
}

export default Component;
