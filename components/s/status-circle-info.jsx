import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk232ubdj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk232ubdj"/>`,
		"fallback": "fluent-mdl2:status-circle-info",
	});
}

export default Component;
