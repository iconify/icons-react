import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lghfbwbad.css';
import '../../css/p/pnx-7hdbe.css';
import '../../css/r/r-fwg-bgp.css';
import '../../css/p/ppqxdzqbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lghfbwbad"/><path class="pnx-7hdbe"/><path class="r-fwg-bgp"/><path class="ppqxdzqbu"/></g>`,
		"fallback": "solar:sort-from-bottom-to-top-line-duotone",
	});
}

export default Component;
