import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t41hpxb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t41hpxb3l"/>`,
		"fallback": "simple-icons:jsdelivr",
	});
}

export default Component;
