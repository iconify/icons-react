import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce_6m1h3l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce_6m1h3l"/>`,
		"fallback": "whh:stumbleupon",
	});
}

export default Component;
