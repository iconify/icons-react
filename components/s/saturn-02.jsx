import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vph1uef-k.css';
import '../../css/v/vghssgbar.css';
import '../../css/w/whlf697ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vph1uef-k"/><path class="vghssgbar"/><path class="whlf697ff"/></g>`,
		"fallback": "hugeicons:saturn-02",
	});
}

export default Component;
