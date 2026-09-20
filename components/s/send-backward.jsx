import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx6vj_dxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx6vj_dxf"/>`,
		"fallback": "ri:send-backward",
	});
}

export default Component;
