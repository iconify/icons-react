import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8b6mwh1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8b6mwh1k"/>`,
		"fallback": "coolicons:map-pin-check-fill-round",
	});
}

export default Component;
