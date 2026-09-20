import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en1zvri8d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en1zvri8d"/>`,
		"fallback": "material-icon-theme:lilypond",
	});
}

export default Component;
