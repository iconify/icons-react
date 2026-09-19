import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp_uagnzf.css';
import '../../css/z/zwr_uxclv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp_uagnzf"/><path class="zwr_uxclv"/>`,
		"fallback": "boxicons:piggy-bank",
	});
}

export default Component;
