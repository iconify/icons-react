import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh1userbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh1userbb"/>`,
		"fallback": "streamline-cyber:medical-cross",
	});
}

export default Component;
