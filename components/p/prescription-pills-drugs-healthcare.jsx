import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tom066bwp.css';
import '../../css/i/i9vwnpbxp.css';
import '../../css/g/g_3mr1b5p.css';
import '../../css/h/h6-lr7bxj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tom066bwp"><path class="i9vwnpbxp"/><path class="g_3mr1b5p"/><path class="h6-lr7bxj"/></g>`,
		"fallback": "streamline-flex-color:prescription-pills-drugs-healthcare",
	});
}

export default Component;
