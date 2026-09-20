import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgnzx4bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgnzx4bri"/>`,
		"fallback": "ri:treasure-map-fill",
	});
}

export default Component;
