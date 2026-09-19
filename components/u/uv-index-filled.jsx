import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is2eirfur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is2eirfur"/>`,
		"fallback": "carbon:uv-index-filled",
	});
}

export default Component;
