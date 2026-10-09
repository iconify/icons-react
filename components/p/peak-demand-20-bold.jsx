import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owfg3hrsx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owfg3hrsx"/>`,
		"fallback": "energy-icons:peak-demand-20-bold",
	});
}

export default Component;
