import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fabazvbbq.css';
import '../../css/c/c8jp6n-8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fabazvbbq"/><path class="c8jp6n-8a"/>`,
		"fallback": "energy-icons:towels-20",
	});
}

export default Component;
