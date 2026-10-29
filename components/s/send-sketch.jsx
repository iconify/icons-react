import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n3aa3iv0a.css';
import '../../css/d/d7ut18bbg.css';
import '../../css/u/uf0ekee7e.css';
import '../../css/k/k1kj1iruv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n3aa3iv0a"/><path class="d7ut18bbg wm-k"/><path class="uf0ekee7e wm-k"/><path class="k1kj1iruv wm-a"/></g>`,
		"fallback": "withicons:send-sketch",
	});
}

export default Component;
