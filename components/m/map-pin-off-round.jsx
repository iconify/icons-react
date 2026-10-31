import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbegmlb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbegmlb5z"/>`,
		"fallback": "coolicons:map-pin-off-round",
	});
}

export default Component;
