import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8clfnmeu.css';
import '../../css/v/vk_1vtl0s.css';
import '../../css/l/lz9v_niow.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uyul9oadq.css';
import '../../css/j/jlo7qacpf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8clfnmeu"/><path class="vk_1vtl0s"/><path class="lz9v_niow"/><g class="jn8qy4bru"><path class="uyul9oadq"/><path class="jlo7qacpf"/></g>`,
		"fallback": "openmoji:seal",
	});
}

export default Component;
