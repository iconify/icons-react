import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/nk3dl4uds.css';
import '../../css/v/vwchbrbih.css';
import '../../css/r/rye60qbvw.css';
import '../../css/t/ttx1kqvop.css';
import '../../css/s/se8-25b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="nk3dl4uds"/><path class="vwchbrbih"/><path class="rye60qbvw"/><path class="ttx1kqvop"/><path class="se8-25b9x"/></g>`,
		"fallback": "streamline-sharp-color:pet-friendly-hotel",
	});
}

export default Component;
