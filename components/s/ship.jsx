import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0q4tlbhd.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0q4tlbhd"/>`,
		"fallback": "fa:ship",
	});
}

export default Component;
