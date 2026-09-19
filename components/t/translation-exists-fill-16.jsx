import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4hmsdbrv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4hmsdbrv"/>`,
		"fallback": "garden:translation-exists-fill-16",
	});
}

export default Component;
