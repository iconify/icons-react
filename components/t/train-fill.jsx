import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqnvo5brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqnvo5brk"/>`,
		"fallback": "ri:train-fill",
	});
}

export default Component;
