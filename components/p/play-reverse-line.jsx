import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj9kt2-kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj9kt2-kl"/>`,
		"fallback": "ri:play-reverse-line",
	});
}

export default Component;
