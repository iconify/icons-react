import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj8l9tbqx.css';
import '../../css/v/vqd8c7baf.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj8l9tbqx"/><path class="vqd8c7baf"/>`,
		"fallback": "formkit:upload",
	});
}

export default Component;
