import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8y2fgjvr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8y2fgjvr"/>`,
		"fallback": "f7:paperplane-fill",
	});
}

export default Component;
