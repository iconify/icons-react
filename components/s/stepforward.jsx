import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpb6u2b-i.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpb6u2b-i"/>`,
		"fallback": "formkit:stepforward",
	});
}

export default Component;
