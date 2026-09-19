import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql53qehak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql53qehak"/>`,
		"fallback": "icons8:numbered-list",
	});
}

export default Component;
