import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upjig_pzx.css';
import '../../css/m/mii1e_b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upjig_pzx"/><path clip-rule="evenodd" class="mii1e_b2p"/>`,
		"fallback": "bitcoin-icons:iou-filled",
	});
}

export default Component;
