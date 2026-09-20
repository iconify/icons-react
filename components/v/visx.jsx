import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjb_o1gxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjb_o1gxc"/>`,
		"fallback": "thesvg-color:visx",
	});
}

export default Component;
