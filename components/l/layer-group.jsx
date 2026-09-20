import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un4u_u6jm.css';
import '../../css/m/m0_43203z.css';
import '../../css/e/e-4rvpmbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un4u_u6jm"/><path class="m0_43203z"/><path class="e-4rvpmbt"/>`,
		"fallback": "uim:layer-group",
	});
}

export default Component;
