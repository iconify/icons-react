import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cymmyqb3s.css';
import '../../css/f/f0d5hoc7t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cymmyqb3s"/><path class="f0d5hoc7t"/>`,
		"fallback": "openmoji:play-button",
	});
}

export default Component;
