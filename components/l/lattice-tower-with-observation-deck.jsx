import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0g3nabyd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0g3nabyd"/>`,
		"fallback": "pinhead:lattice-tower-with-observation-deck",
	});
}

export default Component;
