import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z3i-i2btw.css';
import '../../css/z/za1_mqbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z3i-i2btw"/><path class="za1_mqbkz"/></g>`,
		"fallback": "akar-icons:pointer-hand",
	});
}

export default Component;
