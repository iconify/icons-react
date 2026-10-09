import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo1l9hn0b.css';
import '../../css/i/i9xwo4sma.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo1l9hn0b"/><path class="i9xwo4sma"/>`,
		"fallback": "energy-icons:ladder-20",
	});
}

export default Component;
