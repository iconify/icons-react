import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq_2w1b3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq_2w1b3n"/>`,
		"fallback": "tabler:temperature-plus",
	});
}

export default Component;
