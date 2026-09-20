import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/iufd0q4bo.css';
import '../../css/v/vvtbpccvs.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="iufd0q4bo"/><path class="vvtbpccvs"/></g>`,
		"fallback": "marketeq:maps-location",
	});
}

export default Component;
