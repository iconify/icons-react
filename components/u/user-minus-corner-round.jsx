import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv5_w2gaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv5_w2gaj"/>`,
		"fallback": "coolicons:user-minus-corner-round",
	});
}

export default Component;
