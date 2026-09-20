import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhvn1ybkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhvn1ybkj"/>`,
		"fallback": "mingcute:vector-group-line",
	});
}

export default Component;
