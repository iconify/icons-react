import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxt_agb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxt_agb-l"/>`,
		"fallback": "heroicons-outline:search",
	});
}

export default Component;
