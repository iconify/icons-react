import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa6bskkcq.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa6bskkcq"/>`,
		"fallback": "fontisto:tv",
	});
}

export default Component;
