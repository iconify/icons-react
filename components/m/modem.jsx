import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj9nae0yh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj9nae0yh"/>`,
		"fallback": "uit:modem",
	});
}

export default Component;
