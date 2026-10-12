import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4jd4tolo.css';
import '../../css/r/rpxxsn_pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4jd4tolo"/><path class="rpxxsn_pk"/></g>`,
		"fallback": "andrsrxn:plug",
	});
}

export default Component;
