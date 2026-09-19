import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lymp3m9ab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lymp3m9ab"/>`,
		"fallback": "codicon:map-filled",
	});
}

export default Component;
