import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neqmi2sea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neqmi2sea"/>`,
		"fallback": "mynaui:pen",
	});
}

export default Component;
