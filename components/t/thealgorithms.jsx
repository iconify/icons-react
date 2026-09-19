import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/funxt_b8b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="funxt_b8b thealgorithms-plain-#000000"/>`,
		"fallback": "devicon-plain:thealgorithms",
	});
}

export default Component;
