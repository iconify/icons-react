import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nm0ksrbca.css';
import '../../css/k/kk4s--bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nm0ksrbca"/><path class="kk4s--bvj"/></g>`,
		"fallback": "reicon:text-square2-filled",
	});
}

export default Component;
