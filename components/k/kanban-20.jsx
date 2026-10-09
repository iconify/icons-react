import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf2m3cbtu.css';
import '../../css/q/q36jvnbvp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf2m3cbtu"/><path class="q36jvnbvp"/>`,
		"fallback": "energy-icons:kanban-20",
	});
}

export default Component;
