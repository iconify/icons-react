import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnvzf6rtr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnvzf6rtr"/>`,
		"fallback": "fa7-brands:linktree",
	});
}

export default Component;
