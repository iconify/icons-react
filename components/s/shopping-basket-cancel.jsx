import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glci12bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="glci12bpq"/>`,
		"fallback": "griddy-icons:shopping-basket-cancel",
	});
}

export default Component;
