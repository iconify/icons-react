import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsvqpqtgj.css';

const viewBox = {"width":320,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsvqpqtgj"/>`,
		"fallback": "ps:plixi",
	});
}

export default Component;
