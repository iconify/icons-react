import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvoo6thzj.css';
import '../../css/j/jz9026bsf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvoo6thzj"/><circle class="jz9026bsf"/>`,
		"fallback": "openmoji:musical-score",
	});
}

export default Component;
