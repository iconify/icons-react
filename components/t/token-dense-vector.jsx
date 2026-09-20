import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccg9vfo6m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccg9vfo6m"/>`,
		"fallback": "oui:token-dense-vector",
	});
}

export default Component;
