import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjjo22bnz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjjo22bnz"/>`,
		"fallback": "quill:user-neutral",
	});
}

export default Component;
