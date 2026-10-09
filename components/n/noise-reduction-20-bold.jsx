import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubfb-9idi.css';
import '../../css/o/o0mm69boz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubfb-9idi"/><path class="o0mm69boz"/>`,
		"fallback": "energy-icons:noise-reduction-20-bold",
	});
}

export default Component;
