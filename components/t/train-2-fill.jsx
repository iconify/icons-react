import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldubd87yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldubd87yg"/>`,
		"fallback": "mingcute:train-2-fill",
	});
}

export default Component;
