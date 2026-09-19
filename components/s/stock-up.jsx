import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpyg2jknu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpyg2jknu"/>`,
		"fallback": "fluent-mdl2:stock-up",
	});
}

export default Component;
