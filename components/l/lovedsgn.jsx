import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrdpt1k-l.css';

const viewBox = {"width":416,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrdpt1k-l"/>`,
		"fallback": "ps:lovedsgn",
	});
}

export default Component;
