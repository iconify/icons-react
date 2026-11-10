import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvacbpvba.css';
import '../../css/l/l7dmcacel.css';
import '../../css/y/yg3m_ob4c.css';
import '../../css/t/tv-kmvola.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvacbpvba"/><path class="l7dmcacel"/><path class="yg3m_ob4c"/><path class="tv-kmvola"/></g>`,
		"fallback": "andrsrxn:robot",
	});
}

export default Component;
