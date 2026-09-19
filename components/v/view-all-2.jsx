import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlouribsz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlouribsz"/>`,
		"fallback": "fluent-mdl2:view-all-2",
	});
}

export default Component;
