import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3320-d5h.css';
import '../../css/m/mt6c1q4zg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3320-d5h"/><path class="mt6c1q4zg"/>`,
		"fallback": "energy-icons:pen-sparkle-20",
	});
}

export default Component;
