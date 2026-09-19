import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8ru5zfjb.css';
import '../../css/w/w3_-hqrjv.css';
import '../../css/x/xvy9ibcic.css';
import '../../css/z/z9ittvbis.css';
import '../../css/o/o4c4ve50q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t8ru5zfjb"/><path class="w3_-hqrjv"/><path class="xvy9ibcic"/><path class="z9ittvbis"/><path class="o4c4ve50q"/></g>`,
		"fallback": "hugeicons:speed-train-01",
	});
}

export default Component;
