import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk20ufmfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk20ufmfh"/>`,
		"fallback": "mingcute:upload-3-line",
	});
}

export default Component;
