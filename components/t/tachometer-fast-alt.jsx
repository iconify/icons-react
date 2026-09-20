import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh3y5mqlb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh3y5mqlb"/>`,
		"fallback": "uil:tachometer-fast-alt",
	});
}

export default Component;
