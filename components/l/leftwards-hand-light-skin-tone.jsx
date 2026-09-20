import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5_x3b-j.css';
import '../../css/j/jzkzakb6k.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5_x3b-j"/><path class="jzkzakb6k"/>`,
		"fallback": "openmoji:leftwards-hand-light-skin-tone",
	});
}

export default Component;
