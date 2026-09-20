import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr87_k8po.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr87_k8po"/>`,
		"fallback": "teenyicons:reddit-outline",
	});
}

export default Component;
