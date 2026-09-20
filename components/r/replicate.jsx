import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/t/tnsdjqzwl.css';
import '../../css/y/ytegigbop.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="tnsdjqzwl"/><path class="ytegigbop"/></g>`,
		"fallback": "system-uicons:replicate",
	});
}

export default Component;
