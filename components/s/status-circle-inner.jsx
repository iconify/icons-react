import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5rhxcbqt.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5rhxcbqt"/>`,
		"fallback": "fluent-mdl2:status-circle-inner",
	});
}

export default Component;
