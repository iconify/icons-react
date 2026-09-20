import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh_g21kfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh_g21kfm"/>`,
		"fallback": "weui:transfer2-filled",
	});
}

export default Component;
