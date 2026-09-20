import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq6-h0bqj.css';
import '../../css/q/qx_8ccc_v.css';
import '../../css/h/h8q8hfbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq6-h0bqj"/><path class="qx_8ccc_v"/><path class="h8q8hfbbl"/>`,
		"fallback": "token:suku",
	});
}

export default Component;
