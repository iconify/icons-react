import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euq48-b2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="euq48-b2y"/>`,
		"fallback": "healthicons:virus-shield",
	});
}

export default Component;
