import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoqk-f2dc.css';
import '../../css/q/qrgtcq9tj.css';
import '../../css/x/xu08aye4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoqk-f2dc"/><path class="qrgtcq9tj"/><path class="xu08aye4i"/>`,
		"fallback": "solar:shield-user-bold-duotone",
	});
}

export default Component;
