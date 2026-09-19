import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybio2ac2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybio2ac2b"/>`,
		"fallback": "cbi:panel-door-open",
	});
}

export default Component;
