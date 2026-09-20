import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1d6mib0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1d6mib0n"/>`,
		"fallback": "tabler:qrcode-off",
	});
}

export default Component;
