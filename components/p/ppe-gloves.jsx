import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0d5r2voh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f0d5r2voh"/>`,
		"fallback": "healthicons:ppe-gloves",
	});
}

export default Component;
