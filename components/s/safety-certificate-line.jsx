import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfohr5d3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfohr5d3l"/>`,
		"fallback": "mingcute:safety-certificate-line",
	});
}

export default Component;
