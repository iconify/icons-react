import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0n9e4xwf.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0n9e4xwf"/>`,
		"fallback": "fluent-mdl2:quick-note",
	});
}

export default Component;
