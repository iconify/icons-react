import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erw718bqg.css';
import '../../css/g/g8uv-0b2d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erw718bqg"/><path class="g8uv-0b2d"/>`,
		"fallback": "openmoji:raised-back-of-hand",
	});
}

export default Component;
