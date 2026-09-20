import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wom0x6b6m.css';
import '../../css/c/cw-owhbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wom0x6b6m"/><path clip-rule="evenodd" class="cw-owhbls"/>`,
		"fallback": "qlementine-icons:question-24",
	});
}

export default Component;
