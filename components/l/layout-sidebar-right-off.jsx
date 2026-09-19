import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj465u-3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj465u-3t"/>`,
		"fallback": "codicon:layout-sidebar-right-off",
	});
}

export default Component;
