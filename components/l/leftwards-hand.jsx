import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocoeuz-lo.css';
import '../../css/j/jzkzakb6k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocoeuz-lo"/><path class="jzkzakb6k"/>`,
		"fallback": "openmoji:leftwards-hand",
	});
}

export default Component;
