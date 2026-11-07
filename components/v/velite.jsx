import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9srqwb2f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9srqwb2f"/>`,
		"fallback": "devicon-plain:velite",
	});
}

export default Component;
