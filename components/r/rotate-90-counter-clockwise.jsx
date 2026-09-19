import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q75nhsbth.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q75nhsbth"/>`,
		"fallback": "fluent-mdl2:rotate-90-counter-clockwise",
	});
}

export default Component;
