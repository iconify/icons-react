import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y10tf2bmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y10tf2bmq"/>`,
		"fallback": "tabler:step-into",
	});
}

export default Component;
