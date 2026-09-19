import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq7qvnbav.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq7qvnbav"/>`,
		"fallback": "codicon:microsoft",
	});
}

export default Component;
