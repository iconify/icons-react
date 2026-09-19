import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z9f0un12z.css';
import '../../css/t/tnbpgjkvm.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/v/vdlq2ibar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z9f0un12z"/><path class="tnbpgjkvm"/><circle class="pyd8uurcz"/><path class="vdlq2ibar"/></g>`,
		"fallback": "hugeicons:satellite",
	});
}

export default Component;
