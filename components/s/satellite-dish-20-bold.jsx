import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2m6mk_mr.css';
import '../../css/l/ljtf0ybqg.css';
import '../../css/i/ixhsczgzl.css';
import '../../css/s/sxr-mzwmz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2m6mk_mr"/><path class="ljtf0ybqg"/><path class="ixhsczgzl"/><path class="sxr-mzwmz"/>`,
		"fallback": "energy-icons:satellite-dish-20-bold",
	});
}

export default Component;
