import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfhxlftau.css';
import '../../css/q/qvec0abqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfhxlftau"/><path class="qvec0abqb"/></g>`,
		"fallback": "coolicons:warehouse-duotone-round",
	});
}

export default Component;
