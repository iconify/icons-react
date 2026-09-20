import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v70alobhi.css';
import '../../css/g/g8uv-0b2d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v70alobhi"/><path class="g8uv-0b2d"/>`,
		"fallback": "openmoji:raised-back-of-hand-medium-skin-tone",
	});
}

export default Component;
