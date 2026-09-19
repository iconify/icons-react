import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilsrssbjv.css';

const viewBox = {"width":717,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilsrssbjv"/>`,
		"fallback": "ls:laugh",
	});
}

export default Component;
