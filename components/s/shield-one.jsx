import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xohs8_ozi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xohs8_ozi"/>`,
		"fallback": "mynaui:shield-one",
	});
}

export default Component;
