import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmfmkn39g.css';
import '../../css/v/v50ri1b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rmfmkn39g"/><path class="v50ri1b1d"/></g>`,
		"fallback": "andrsrxn:skew",
	});
}

export default Component;
