import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkn22bb7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkn22bb7s"/>`,
		"fallback": "pinhead:triangle-up-outline",
	});
}

export default Component;
