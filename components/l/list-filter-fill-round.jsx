import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m538sebkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m538sebkk"/>`,
		"fallback": "coolicons:list-filter-fill-round",
	});
}

export default Component;
