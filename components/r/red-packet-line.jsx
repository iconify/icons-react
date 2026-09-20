import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crd2_n-ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crd2_n-ve"/>`,
		"fallback": "mingcute:red-packet-line",
	});
}

export default Component;
