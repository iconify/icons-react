import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5mmyei8x.css';
import '../../css/o/obv-dzbot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5mmyei8x secondary"/><path class="obv-dzbot primary"/>`,
		"fallback": "iconaut:stroke-line-join-bevel-duo",
	});
}

export default Component;
