import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztn9307gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ztn9307gx"/>`,
		"fallback": "solar:signpost-2-bold",
	});
}

export default Component;
