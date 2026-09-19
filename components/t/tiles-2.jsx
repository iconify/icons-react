import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnfpi3hic.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnfpi3hic"/>`,
		"fallback": "fluent-mdl2:tiles-2",
	});
}

export default Component;
