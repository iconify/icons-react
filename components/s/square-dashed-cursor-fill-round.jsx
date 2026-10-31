import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_oa09bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_oa09bpz"/>`,
		"fallback": "coolicons:square-dashed-cursor-fill-round",
	});
}

export default Component;
