import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgwx5ub8o.css';
import '../../css/f/f_tt1dbek.css';
import '../../css/y/yclr7n-rv.css';
import '../../css/g/gsx_eifrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dgwx5ub8o"/><path class="f_tt1dbek"/><path class="yclr7n-rv"/><path class="gsx_eifrg"/></g>`,
		"fallback": "streamline-freehand-color:mobile-phone-write",
	});
}

export default Component;
