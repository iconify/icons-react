import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc_nxd5hd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc_nxd5hd"/>`,
		"fallback": "boxicons:tape-filled",
	});
}

export default Component;
