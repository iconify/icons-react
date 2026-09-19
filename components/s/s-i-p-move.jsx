import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq26b0qdh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq26b0qdh"/>`,
		"fallback": "fluent-mdl2:s-i-p-move",
	});
}

export default Component;
