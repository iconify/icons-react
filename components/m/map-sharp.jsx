import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmy4j9b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmy4j9b0h"/>`,
		"fallback": "keyline-icons:map-sharp",
	});
}

export default Component;
