import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7ch8sbnj.css';
import '../../css/e/epixueb7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7ch8sbnj"/><path class="epixueb7t"/>`,
		"fallback": "vaadin:padding-left",
	});
}

export default Component;
