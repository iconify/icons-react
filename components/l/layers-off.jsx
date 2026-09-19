import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8jnr3b2p.css';

const viewBox = {"width":432,"height":440};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8jnr3b2p"/>`,
		"fallback": "zmdi:layers-off",
	});
}

export default Component;
