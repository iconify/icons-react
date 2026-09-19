import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/stzadlb3s.css';
import '../../css/p/prngzwbds.css';
import '../../css/y/yzeqrjb-a.css';
import '../../css/o/o8x_1pkko.css';
import '../../css/r/rygkaxbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="stzadlb3s"/><path class="prngzwbds"/><circle class="yzeqrjb-a"/><path class="o8x_1pkko"/><path class="rygkaxbgg"/></g>`,
		"fallback": "bitcoin-icons:rocket-outline",
	});
}

export default Component;
