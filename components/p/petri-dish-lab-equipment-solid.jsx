import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bss_qy-zr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bss_qy-zr"/>`,
		"fallback": "streamline:petri-dish-lab-equipment-solid",
	});
}

export default Component;
