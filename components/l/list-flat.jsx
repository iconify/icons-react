import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/litjmj0_w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="litjmj0_w"/>`,
		"fallback": "codicon:list-flat",
	});
}

export default Component;
