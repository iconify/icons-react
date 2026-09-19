import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe8xhe4fr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe8xhe4fr"/>`,
		"fallback": "codicon:symbol-enum",
	});
}

export default Component;
