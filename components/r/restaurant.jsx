import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5qio4snk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5qio4snk"/>`,
		"fallback": "map:restaurant",
	});
}

export default Component;
