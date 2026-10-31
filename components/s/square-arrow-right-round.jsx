import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3stb3b7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3stb3b7k"/>`,
		"fallback": "coolicons:square-arrow-right-round",
	});
}

export default Component;
