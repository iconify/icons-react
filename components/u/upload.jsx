import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knrki_leo.css';
import '../../css/z/z9sersb6j.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knrki_leo"/><path class="z9sersb6j"/>`,
		"fallback": "foundation:upload",
	});
}

export default Component;
