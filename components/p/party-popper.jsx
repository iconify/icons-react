import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi_1hp_-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi_1hp_-a"/>`,
		"fallback": "pixelarticons:party-popper",
	});
}

export default Component;
