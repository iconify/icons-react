import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmzaum9qs.css';
import '../../css/p/pefb_hibq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmzaum9qs"/><path class="pefb_hibq"/>`,
		"fallback": "energy-icons:volume-high-20",
	});
}

export default Component;
