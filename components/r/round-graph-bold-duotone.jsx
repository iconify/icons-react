import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkgkxnb0k.css';
import '../../css/x/x0zzi0bor.css';
import '../../css/n/nh75w0b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pkgkxnb0k"/><path class="x0zzi0bor"/><path class="nh75w0b0t"/>`,
		"fallback": "solar:round-graph-bold-duotone",
	});
}

export default Component;
