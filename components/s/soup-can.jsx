import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu2r8si_d.css';
import '../../css/u/unsvoio8e.css';
import '../../css/w/w7y0ng4cv.css';
import '../../css/i/ik07y_b3t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="yu2r8si_d"/><path class="unsvoio8e"/><path class="w7y0ng4cv"/><path class="ik07y_b3t"/>`,
		"fallback": "ion:soup-can",
	});
}

export default Component;
