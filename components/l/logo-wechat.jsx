import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqm469b_j.css';
import '../../css/m/mjpn8j_wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqm469b_j"/><path class="mjpn8j_wb"/>`,
		"fallback": "tdesign:logo-wechat",
	});
}

export default Component;
