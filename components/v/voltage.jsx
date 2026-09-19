import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku5kwhbis.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku5kwhbis"/>`,
		"fallback": "whh:voltage",
	});
}

export default Component;
