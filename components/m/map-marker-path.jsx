import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9hn-ac4f.css';
import '../../css/f/f6qotga_j.css';
import '../../css/m/mxbrqet7n.css';
import '../../css/m/mmtc1hr0r.css';
import '../../css/u/u24fbtb3s.css';
import '../../css/m/mrye7_b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p9hn-ac4f"/><path class="f6qotga_j"/><path class="mxbrqet7n"/><circle class="mmtc1hr0r"/><circle class="u24fbtb3s"/><path clip-rule="evenodd" class="mrye7_b0a"/></g>`,
		"fallback": "majesticons:map-marker-path",
	});
}

export default Component;
