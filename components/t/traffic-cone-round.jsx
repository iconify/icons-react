import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srfvgfj4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srfvgfj4p"/>`,
		"fallback": "coolicons:traffic-cone-round",
	});
}

export default Component;
