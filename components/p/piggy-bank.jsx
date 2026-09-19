import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwz0i-bmg.css';

const viewBox = {"width":520,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwz0i-bmg"/>`,
		"fallback": "ps:piggy-bank",
	});
}

export default Component;
