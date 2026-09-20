import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6215pfzq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6215pfzq"/>`,
		"fallback": "pinhead:milk-carton-and-cheese",
	});
}

export default Component;
