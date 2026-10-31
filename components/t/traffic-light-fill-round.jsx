import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkhkkx8gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkhkkx8gr"/>`,
		"fallback": "coolicons:traffic-light-fill-round",
	});
}

export default Component;
