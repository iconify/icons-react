import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq13o4b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq13o4b6d"/>`,
		"fallback": "coolicons:router-fill-round",
	});
}

export default Component;
