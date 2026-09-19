import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2v2-1bym.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2v2-1bym"/>`,
		"fallback": "fluent-mdl2:rows-child",
	});
}

export default Component;
