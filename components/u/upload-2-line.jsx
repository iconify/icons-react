import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc7srlzrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc7srlzrn"/>`,
		"fallback": "mingcute:upload-2-line",
	});
}

export default Component;
