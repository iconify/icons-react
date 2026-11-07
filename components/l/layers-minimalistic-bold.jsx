import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsikgs9ig.css';
import '../../css/s/s12m7vb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsikgs9ig"/><path clip-rule="evenodd" class="s12m7vb1w"/>`,
		"fallback": "solar:layers-minimalistic-bold",
	});
}

export default Component;
