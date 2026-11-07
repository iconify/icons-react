import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an1b2abwc.css';
import '../../css/a/aez-bmivh.css';
import '../../css/x/xo56y0b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an1b2abwc"/><path clip-rule="evenodd" class="aez-bmivh"/><path class="xo56y0b0p"/>`,
		"fallback": "solar:posts-carousel-vertical-outline",
	});
}

export default Component;
