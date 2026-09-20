import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld4yb5bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld4yb5bhz"/>`,
		"fallback": "mynaui:panel-bottom",
	});
}

export default Component;
