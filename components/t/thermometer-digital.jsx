import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4cg5bcvy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4cg5bcvy"/>`,
		"fallback": "healthicons:thermometer-digital",
	});
}

export default Component;
