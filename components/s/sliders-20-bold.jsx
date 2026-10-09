import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fph3g9b8f.css';
import '../../css/g/g4fgyobiq.css';
import '../../css/q/q5x211bex.css';
import '../../css/i/ikv4dbcut.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fph3g9b8f"/><path class="g4fgyobiq"/><path class="q5x211bex"/><path class="ikv4dbcut"/>`,
		"fallback": "energy-icons:sliders-20-bold",
	});
}

export default Component;
