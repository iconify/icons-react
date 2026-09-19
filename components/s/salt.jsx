import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qos3n9bfs.css';
import '../../css/e/ekbngzrhg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qos3n9bfs"/><path class="ekbngzrhg"/></g>`,
		"fallback": "cryptocurrency-color:salt",
	});
}

export default Component;
