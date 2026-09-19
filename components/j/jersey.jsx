import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb889bbui.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb889bbui"/>`,
		"fallback": "whh:jersey",
	});
}

export default Component;
