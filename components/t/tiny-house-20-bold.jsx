import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3ncbbc7h.css';
import '../../css/w/wtrttcq8m.css';
import '../../css/t/tcplxobio.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3ncbbc7h"/><path class="wtrttcq8m"/><path class="tcplxobio"/>`,
		"fallback": "energy-icons:tiny-house-20-bold",
	});
}

export default Component;
