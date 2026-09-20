import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs3xk0brh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs3xk0brh"/>`,
		"fallback": "pinhead:one-minus-over-water",
	});
}

export default Component;
