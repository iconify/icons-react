import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
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
		"content": `<g class="pr52f_b5y"><path class="i9vwnpbxp"/><path class="g_3mr1b5p"/><path class="h6-lr7bxj"/></g>`,
		"fallback": "streamline-flex:prescription-pills-drugs-healthcare",
	});
}

export default Component;
