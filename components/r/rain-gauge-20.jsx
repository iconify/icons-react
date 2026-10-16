import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihcg3e6qc.css';
import '../../css/n/nnq4tpzbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihcg3e6qc"/><path class="nnq4tpzbo"/>`,
		"fallback": "energy-icons:rain-gauge-20",
	});
}

export default Component;
