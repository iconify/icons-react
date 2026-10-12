import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocp-zwjse.css';
import '../../css/z/znuj7bbnf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocp-zwjse"/><path class="znuj7bbnf"/>`,
		"fallback": "garden:phone-arrow-left-stroke-20",
	});
}

export default Component;
