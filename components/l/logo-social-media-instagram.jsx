import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1gllrzuq.css';
import '../../css/q/qh86mlter.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1gllrzuq"/><path class="qh86mlter"/>`,
		"fallback": "streamline-pixel:logo-social-media-instagram",
	});
}

export default Component;
