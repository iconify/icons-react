import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egjrucbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egjrucbze"/>`,
		"fallback": "coolicons:square-arrow-right-fill-round",
	});
}

export default Component;
