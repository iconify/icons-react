import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4c7z3ber.css';
import '../../css/g/gyo3mhbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lamp-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="i4c7z3ber"/><path class="gyo3mhbbj"/></g></g>`,
		"fallback": "cuida:lamp-outline",
	});
}

export default Component;
