import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vml1vdbha.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vml1vdbha"/>`,
		"fallback": "codicon:symbol-field",
	});
}

export default Component;
