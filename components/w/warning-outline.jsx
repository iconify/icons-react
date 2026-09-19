import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecuu_-sxs.css';
import '../../css/j/j6ag-3bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecuu_-sxs"/><path class="j6ag-3bnd"/>`,
		"fallback": "ci:warning-outline",
	});
}

export default Component;
