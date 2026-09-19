import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvw8wccdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvw8wccdj"/>`,
		"fallback": "cbi:motionsensor",
	});
}

export default Component;
