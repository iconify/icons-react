import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec6h5ubjk.css';
import '../../css/c/cyglm8gxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ec6h5ubjk"/><path class="cyglm8gxk"/>`,
		"fallback": "mingcute:tower-crane-fill",
	});
}

export default Component;
