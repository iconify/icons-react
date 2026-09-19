import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzk2onifa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzk2onifa"/>`,
		"fallback": "fe:line-chart",
	});
}

export default Component;
