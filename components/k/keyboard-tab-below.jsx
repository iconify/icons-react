import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwl893x-o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwl893x-o"/>`,
		"fallback": "codicon:keyboard-tab-below",
	});
}

export default Component;
