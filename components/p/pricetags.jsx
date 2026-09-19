import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkan-9bwk.css';
import '../../css/l/l307u0bel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkan-9bwk"/><path class="l307u0bel"/>`,
		"fallback": "ion:pricetags",
	});
}

export default Component;
