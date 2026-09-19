import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4krzf3cr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4krzf3cr"/>`,
		"fallback": "codicon:sync",
	});
}

export default Component;
