import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8otfzbxq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8otfzbxq"/>`,
		"fallback": "openmoji:repeat-single-button",
	});
}

export default Component;
