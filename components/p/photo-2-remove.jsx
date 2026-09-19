import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5__1z18o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5__1z18o"/>`,
		"fallback": "fluent-mdl2:photo-2-remove",
	});
}

export default Component;
