import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n1f7v1byd.css';
import '../../css/a/ajkm4g1km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n1f7v1byd"/><path class="ajkm4g1km"/></g>`,
		"fallback": "keyline-icons:octagon-x",
	});
}

export default Component;
