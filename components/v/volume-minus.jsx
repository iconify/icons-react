import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq1km7b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq1km7b-n"/>`,
		"fallback": "noviair-light:volume-minus",
	});
}

export default Component;
