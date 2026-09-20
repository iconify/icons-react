import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybj_cgbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybj_cgbzq"/>`,
		"fallback": "mynaui:shield-x-solid",
	});
}

export default Component;
