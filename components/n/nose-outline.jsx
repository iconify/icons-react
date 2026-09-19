import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gregbvb8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gregbvb8q"/>`,
		"fallback": "healthicons:nose-outline",
	});
}

export default Component;
