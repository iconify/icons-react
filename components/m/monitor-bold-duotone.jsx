import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0ntbnb-n.css';
import '../../css/s/s7ykjoo1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0ntbnb-n"/><path class="s7ykjoo1y"/>`,
		"fallback": "solar:monitor-bold-duotone",
	});
}

export default Component;
