import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1n2isbof.css';
import '../../css/m/mn36lt97b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1n2isbof"/><path class="mn36lt97b"/>`,
		"fallback": "boxicons:self-care",
	});
}

export default Component;
