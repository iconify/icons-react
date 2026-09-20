import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8s1htbdm.css';
import '../../css/r/rus9pebka.css';
import '../../css/j/jhxi-trnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v8s1htbdm"/><circle class="rus9pebka"/><rect class="jhxi-trnl"/></g>`,
		"fallback": "lucide:user-square-2",
	});
}

export default Component;
