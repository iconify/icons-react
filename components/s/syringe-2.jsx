import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_u-l2b9v.css';
import '../../css/i/iovbv5b5g.css';
import '../../css/e/ezvfp183n.css';
import '../../css/s/s8lbajbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_u-l2b9v"/><path class="iovbv5b5g"/><path class="ezvfp183n"/><path class="s8lbajbxt"/></g>`,
		"fallback": "streamline-cyber-color:syringe-2",
	});
}

export default Component;
