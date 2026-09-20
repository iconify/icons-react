import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0c16rc2r.css';
import '../../css/s/se4563bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0c16rc2r"/><path class="se4563bpp"/>`,
		"fallback": "streamline-ultimate:light-mode-hdr-bold",
	});
}

export default Component;
