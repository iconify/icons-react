import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtodwymrs.css';
import '../../css/l/llc8bjvxe.css';
import '../../css/t/t73532b7t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtodwymrs"/><path class="llc8bjvxe"/><path class="t73532b7t"/>`,
		"fallback": "energy-icons:penstock-20-bold",
	});
}

export default Component;
