import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mik8_3b7p.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mik8_3b7p"/>`,
		"fallback": "lineicons:location-arrow-right",
	});
}

export default Component;
