import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljd3w-lru.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ljd3w-lru"/>`,
		"fallback": "teenyicons:italic-solid",
	});
}

export default Component;
