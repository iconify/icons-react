import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph-3zj5qm.css';
import '../../css/p/phy_y3bne.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph-3zj5qm"/><path clip-rule="evenodd" class="phy_y3bne"/>`,
		"fallback": "lineicons:select-cursor-1",
	});
}

export default Component;
