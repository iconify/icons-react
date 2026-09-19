import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai5bd-qzd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai5bd-qzd"/>`,
		"fallback": "fa7-solid:temperature-empty",
	});
}

export default Component;
