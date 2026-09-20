import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vto_qpspa.css';
import '../../css/i/i6nrt8nnu.css';
import '../../css/p/p8kjf3qdz.css';
import '../../css/t/tvuqtkb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vto_qpspa"/><path class="i6nrt8nnu"/><path class="p8kjf3qdz"/><path class="tvuqtkb4q"/></g>`,
		"fallback": "solar:medal-ribbons-star-linear",
	});
}

export default Component;
