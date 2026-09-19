import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysq1xfblj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysq1xfblj"/>`,
		"fallback": "fa6-solid:spray-can-sparkles",
	});
}

export default Component;
