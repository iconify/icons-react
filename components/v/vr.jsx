import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjta1r2ac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjta1r2ac"/>`,
		"fallback": "codicon:vr",
	});
}

export default Component;
