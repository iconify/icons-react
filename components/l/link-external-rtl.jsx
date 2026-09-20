import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djym6wg5f.css';
import '../../css/v/vdsmzq_1v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djym6wg5f"/><path class="vdsmzq_1v"/>`,
		"fallback": "ooui:link-external-rtl",
	});
}

export default Component;
