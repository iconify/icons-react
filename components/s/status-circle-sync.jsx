import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azfsvqb3h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azfsvqb3h"/>`,
		"fallback": "fluent-mdl2:status-circle-sync",
	});
}

export default Component;
