import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvzr0fklu.css';
import '../../css/l/lll6g396l.css';
import '../../css/g/gyj__2tko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bvzr0fklu"/><path class="lll6g396l"/><path class="gyj__2tko"/></g>`,
		"fallback": "hugeicons:tea",
	});
}

export default Component;
