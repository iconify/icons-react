import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nffkq2bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nffkq2bfm"/>`,
		"fallback": "tdesign:logo-tencentmeeting-filled",
	});
}

export default Component;
