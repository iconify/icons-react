import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7jtysb8o.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7jtysb8o"/>`,
		"fallback": "octicon:note",
	});
}

export default Component;
