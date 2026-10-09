import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9b4hcc5m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9b4hcc5m"/>`,
		"fallback": "energy-icons:list-ordered-20",
	});
}

export default Component;
