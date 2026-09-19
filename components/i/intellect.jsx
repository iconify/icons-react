import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktxbgbbpn.css';
import '../../css/y/y3f_nfkuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktxbgbbpn"/><path class="y3f_nfkuo"/>`,
		"fallback": "boxicons:intellect",
	});
}

export default Component;
