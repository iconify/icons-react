import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d28tlbcov.css';
import '../../css/r/r173rlbez.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d28tlbcov"/><path class="r173rlbez"/>`,
		"fallback": "heroicons:scissors-16-solid",
	});
}

export default Component;
