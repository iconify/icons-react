import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l07pnbbis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l07pnbbis"/>`,
		"fallback": "at-icons:speech-bubble-question",
	});
}

export default Component;
