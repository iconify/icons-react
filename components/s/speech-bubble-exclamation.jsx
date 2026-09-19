import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_oqwdk7v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_oqwdk7v"/>`,
		"fallback": "at-icons:speech-bubble-exclamation",
	});
}

export default Component;
