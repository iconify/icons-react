import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buk6hlfsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buk6hlfsw"/>`,
		"fallback": "game-icons:t-shirt",
	});
}

export default Component;
