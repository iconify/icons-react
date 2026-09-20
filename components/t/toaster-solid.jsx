import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4qp48d_c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s4qp48d_c"/>`,
		"fallback": "streamline-flex:toaster-solid",
	});
}

export default Component;
