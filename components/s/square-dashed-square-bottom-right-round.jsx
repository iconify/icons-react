import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdqmb4bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdqmb4bfx"/>`,
		"fallback": "coolicons:square-dashed-square-bottom-right-round",
	});
}

export default Component;
