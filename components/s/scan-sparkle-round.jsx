import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urv1w5b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urv1w5b0n"/>`,
		"fallback": "coolicons:scan-sparkle-round",
	});
}

export default Component;
