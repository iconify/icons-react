import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-dxipbgc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-dxipbgc"/>`,
		"fallback": "pinhead:shopping-bag-with-circular-pill-and-capsule-pill",
	});
}

export default Component;
