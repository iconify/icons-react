import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pg4-jub4i.css';
import '../../css/x/xq8t-jxvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pg4-jub4i"/><path class="xq8t-jxvg"/></g>`,
		"fallback": "tabler:traffic-lights",
	});
}

export default Component;
