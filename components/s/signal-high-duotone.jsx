import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rywu1ccyr.css';
import '../../css/m/mokcz3tjz.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rywu1ccyr"/><path class="mokcz3tjz"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:signal-high-duotone",
	});
}

export default Component;
