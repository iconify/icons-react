import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo_sxubsd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo_sxubsd"/>`,
		"fallback": "fluent-mdl2:test-plan",
	});
}

export default Component;
