import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb7z8wwtr.css';
import '../../css/r/rututhb5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb7z8wwtr"/><path class="rututhb5h"/>`,
		"fallback": "carbon:task-approved",
	});
}

export default Component;
