import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k470z5bpj.css';
import '../../css/y/y6r5hibqf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k470z5bpj"/><path class="y6r5hibqf"/>`,
		"fallback": "energy-icons:lightbulb-sparkle-20-bold",
	});
}

export default Component;
