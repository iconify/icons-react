import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrnd56o7y.css';
import '../../css/m/mxeyk-kuw.css';
import '../../css/l/lm1vs3fnp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jrnd56o7y"/><path class="mxeyk-kuw"/><path class="lm1vs3fnp"/></g>`,
		"fallback": "catppuccin:spwn",
	});
}

export default Component;
