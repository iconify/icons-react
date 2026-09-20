import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zb5szpb6d.css';
import '../../css/o/oxf6z5bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zb5szpb6d"/><path class="oxf6z5bpo"/></g>`,
		"fallback": "thesvg:technology-innovation-institute-falcon",
	});
}

export default Component;
