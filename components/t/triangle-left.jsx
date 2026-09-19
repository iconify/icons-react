import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjyy7ib5m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjyy7ib5m"/>`,
		"fallback": "codicon:triangle-left",
	});
}

export default Component;
