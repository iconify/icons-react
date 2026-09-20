import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4yvbibxr.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4yvbibxr"/>`,
		"fallback": "wi:rain-wind",
	});
}

export default Component;
