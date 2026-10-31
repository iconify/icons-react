import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls5zy66mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls5zy66mw"/>`,
		"fallback": "coolicons:map-pin-heart-round",
	});
}

export default Component;
