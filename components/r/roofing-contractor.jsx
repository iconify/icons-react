import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yey0n_erf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yey0n_erf"/>`,
		"fallback": "map:roofing-contractor",
	});
}

export default Component;
