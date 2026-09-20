import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt6gjyb0z.css';
import '../../css/h/hs9yxrbzv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt6gjyb0z"/><path class="hs9yxrbzv"/>`,
		"fallback": "openmoji:stairway",
	});
}

export default Component;
