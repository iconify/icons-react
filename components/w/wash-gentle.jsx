import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sn4-c-bco.css';
import '../../css/y/yv3ui9h0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sn4-c-bco"/><path class="yv3ui9h0q"/></g>`,
		"fallback": "tabler:wash-gentle",
	});
}

export default Component;
