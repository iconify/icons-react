import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hu2tambpg.css';
import '../../css/v/vdxgplb2v.css';
import '../../css/p/p6uep2bvw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hu2tambpg"/><path clip-rule="evenodd" class="vdxgplb2v"/><path class="p6uep2bvw"/></g>`,
		"fallback": "streamline-color:tablet-capsule",
	});
}

export default Component;
