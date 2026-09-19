import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6_avbb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6_avbb3j"/>`,
		"fallback": "griddy-icons:pool",
	});
}

export default Component;
