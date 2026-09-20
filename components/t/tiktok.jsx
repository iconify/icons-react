import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhi976k0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhi976k0n"/>`,
		"fallback": "prime:tiktok",
	});
}

export default Component;
