import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m542cpb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m542cpb6m"/>`,
		"fallback": "coolicons:smartwatch-fill-round",
	});
}

export default Component;
