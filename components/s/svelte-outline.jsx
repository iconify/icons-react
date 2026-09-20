import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya00f5jao.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya00f5jao"/>`,
		"fallback": "teenyicons:svelte-outline",
	});
}

export default Component;
