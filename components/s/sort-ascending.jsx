import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqn6dznwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqn6dznwv"/>`,
		"fallback": "mdi:sort-ascending",
	});
}

export default Component;
