import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylpqp1b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylpqp1b8w"/>`,
		"fallback": "meteor-icons:wave-triangle",
	});
}

export default Component;
