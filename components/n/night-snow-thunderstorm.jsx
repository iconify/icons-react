import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx5a0xb9d.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx5a0xb9d"/>`,
		"fallback": "wi:night-snow-thunderstorm",
	});
}

export default Component;
