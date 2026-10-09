import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivpnqg4j.css';
import '../../css/d/dy4xl-b3c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivpnqg4j"/><path class="dy4xl-b3c"/>`,
		"fallback": "energy-icons:kanban-20-bold",
	});
}

export default Component;
