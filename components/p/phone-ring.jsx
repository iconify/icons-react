import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si0cvqbui.css';

const viewBox = {"width":512,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si0cvqbui"/>`,
		"fallback": "zmdi:phone-ring",
	});
}

export default Component;
