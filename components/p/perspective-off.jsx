import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6dfp0bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6dfp0bwi"/>`,
		"fallback": "tabler:perspective-off",
	});
}

export default Component;
