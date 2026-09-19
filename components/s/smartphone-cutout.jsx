import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dumqbj2il.css';
import '../../css/i/i6f4d8sph.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dumqbj2il"/><path class="i6f4d8sph"/></g>`,
		"fallback": "pepicons:smartphone-cutout",
	});
}

export default Component;
