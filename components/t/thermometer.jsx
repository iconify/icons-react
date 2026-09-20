import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0v14dbpv.css';
import '../../css/p/pq8_tsv7i.css';
import '../../css/n/ndoef6xmk.css';
import '../../css/h/htffqxdup.css';
import '../../css/c/ca4_p0bkm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0v14dbpv"/><path class="pq8_tsv7i"/><path class="ndoef6xmk"/><path class="htffqxdup"/><path class="ca4_p0bkm"/></g>`,
		"fallback": "streamline-flex-color:thermometer",
	});
}

export default Component;
