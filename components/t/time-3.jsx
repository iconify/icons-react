import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpm1h9bjw.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpm1h9bjw"/>`,
		"fallback": "wi:time-3",
	});
}

export default Component;
