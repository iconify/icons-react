import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-19e_q6f.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-19e_q6f"/>`,
		"fallback": "fa7-regular:life-ring",
	});
}

export default Component;
