import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg1-embqj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg1-embqj"/>`,
		"fallback": "quill:sort-alt",
	});
}

export default Component;
