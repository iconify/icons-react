import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrux0jbny.css';
import '../../css/n/nbmn6vbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qrux0jbny"/><path class="nbmn6vbmt"/></g>`,
		"fallback": "iconamoon:profile-circle-light",
	});
}

export default Component;
