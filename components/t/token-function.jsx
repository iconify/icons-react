import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztp720b9z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztp720b9z"/>`,
		"fallback": "oui:token-function",
	});
}

export default Component;
