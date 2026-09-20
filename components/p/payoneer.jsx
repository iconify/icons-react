import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txfwdmb_e.css';
import '../../css/s/slra1_f-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txfwdmb_e"/><path clip-rule="evenodd" class="slra1_f-x"/>`,
		"fallback": "lineicons:payoneer",
	});
}

export default Component;
