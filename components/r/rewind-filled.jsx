import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc93vrbkc.css';
import '../../css/z/zho_0_ruy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc93vrbkc"/><path class="zho_0_ruy"/>`,
		"fallback": "boxicons:rewind-filled",
	});
}

export default Component;
