import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyz2fo8fs.css';
import '../../css/q/q372t5bar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyz2fo8fs"/><path class="q372t5bar"/>`,
		"fallback": "energy-icons:smartphone-charging-48",
	});
}

export default Component;
