import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/im48xinii.css';
import '../../css/h/hc0su0byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="im48xinii"/><path class="hc0su0byg"/></g>`,
		"fallback": "vadivam:tree-palm",
	});
}

export default Component;
