import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2a315bzf.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2a315bzf"/>`,
		"fallback": "codicon:vm-small",
	});
}

export default Component;
