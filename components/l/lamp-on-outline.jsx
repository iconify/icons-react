import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4c7z3ber.css';
import '../../css/g/gyo3mhbbj.css';
import '../../css/w/wqyu5woqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lamp-on-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="i4c7z3ber"/><path class="gyo3mhbbj"/><path clip-rule="evenodd" class="wqyu5woqd"/></g></g>`,
		"fallback": "cuida:lamp-on-outline",
	});
}

export default Component;
