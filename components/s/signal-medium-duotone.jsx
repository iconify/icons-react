import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cyawe5bba.css';
import '../../css/q/qrvxkc7do.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cyawe5bba"/><path class="qrvxkc7do"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:signal-medium-duotone",
	});
}

export default Component;
