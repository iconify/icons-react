import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa_2w9b_v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa_2w9b_v"/>`,
		"fallback": "pinhead:mississippi-with-capital-star",
	});
}

export default Component;
