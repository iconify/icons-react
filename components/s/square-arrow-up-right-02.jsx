import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/olvz54bxq.css';
import '../../css/z/zslfi4b0o.css';
import '../../css/p/pbwadabrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="olvz54bxq"/><path class="zslfi4b0o"/><path class="pbwadabrx"/></g>`,
		"fallback": "hugeicons:square-arrow-up-right-02",
	});
}

export default Component;
