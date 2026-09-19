import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoxr_xwde.css';
import '../../css/v/vvuprkbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b yoxr_xwde"/><path class="b vvuprkbvg"/>`,
		"fallback": "boxicons:noise",
	});
}

export default Component;
