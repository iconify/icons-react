import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krn8lyatz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krn8lyatz"/>`,
		"fallback": "codicon:person",
	});
}

export default Component;
