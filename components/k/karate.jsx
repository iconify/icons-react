import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrpo78owk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrpo78owk"/>`,
		"fallback": "token:karate",
	});
}

export default Component;
