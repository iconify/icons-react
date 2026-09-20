import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr_cwq1fx.css';
import '../../css/i/iq2010_hj.css';
import '../../css/p/pm51mix5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xr_cwq1fx"/><path class="iq2010_hj"/><path class="pm51mix5u"/></g>`,
		"fallback": "streamline-cyber-color:phone-3",
	});
}

export default Component;
