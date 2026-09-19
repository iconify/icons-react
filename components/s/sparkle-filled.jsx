import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn1b_0v6f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn1b_0v6f"/>`,
		"fallback": "codicon:sparkle-filled",
	});
}

export default Component;
