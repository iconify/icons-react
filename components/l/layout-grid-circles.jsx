import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf9_qabtn.css';
import '../../css/s/sk7rahmof.css';
import '../../css/y/yphewc7qd.css';
import '../../css/t/t-7lz5bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="bf9_qabtn"/><circle class="sk7rahmof"/><circle class="yphewc7qd"/><circle class="t-7lz5bmz"/></g>`,
		"fallback": "lucide:layout-grid-circles",
	});
}

export default Component;
