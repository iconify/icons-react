import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exv0g4bou.css';
import '../../css/y/ymkt-qbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exv0g4bou secondary"/><path class="primary ymkt-qbpr"/>`,
		"fallback": "iconaut:phone-duo",
	});
}

export default Component;
