import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8vmkvs3d.css';
import '../../css/d/dja74c7ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j8vmkvs3d"/><path class="dja74c7ds"/></g>`,
		"fallback": "lets-icons:knife",
	});
}

export default Component;
