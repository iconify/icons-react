import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urcr4j1xg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urcr4j1xg"/>`,
		"fallback": "garden:pause-fill-20",
	});
}

export default Component;
