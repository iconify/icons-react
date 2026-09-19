import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr1gsdofn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr1gsdofn"/>`,
		"fallback": "carbon:select-01",
	});
}

export default Component;
