import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhfe5s5yo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jhfe5s5yo"/>`,
		"fallback": "healthicons:vascular-surgery",
	});
}

export default Component;
