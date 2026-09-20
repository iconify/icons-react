import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zquszm3xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zquszm3xo"/>`,
		"fallback": "majesticons:next-circle",
	});
}

export default Component;
