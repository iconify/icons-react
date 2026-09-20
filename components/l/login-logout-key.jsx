import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2v7vnbnn.css';
import '../../css/y/yunb_lbwv.css';
import '../../css/y/yx381rqgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n2v7vnbnn"/><path clip-rule="evenodd" class="yunb_lbwv"/><path class="yx381rqgw"/>`,
		"fallback": "streamline-freehand:login-logout-key",
	});
}

export default Component;
