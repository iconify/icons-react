import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj6fz_blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj6fz_blj"/>`,
		"fallback": "coolicons:octagon-minus-fill-round",
	});
}

export default Component;
