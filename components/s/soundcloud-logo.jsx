import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlxaoh3ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlxaoh3ba"/>`,
		"fallback": "streamline-ultimate:soundcloud-logo",
	});
}

export default Component;
