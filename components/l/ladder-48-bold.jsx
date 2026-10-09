import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klcw8eg5x.css';
import '../../css/n/nbve-mbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klcw8eg5x"/><path class="nbve-mbeo"/>`,
		"fallback": "energy-icons:ladder-48-bold",
	});
}

export default Component;
