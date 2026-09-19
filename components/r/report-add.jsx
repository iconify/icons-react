import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj5d3u5yj.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj5d3u5yj"/>`,
		"fallback": "fluent-mdl2:report-add",
	});
}

export default Component;
