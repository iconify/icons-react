import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzi1nibui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzi1nibui"/>`,
		"fallback": "cbi:pagani",
	});
}

export default Component;
