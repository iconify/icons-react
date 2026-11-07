import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szsyyvgyx.css';
import '../../css/e/e_dihi53c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szsyyvgyx"/><path class="e_dihi53c"/>`,
		"fallback": "solar:notes-minimalistic-bold",
	});
}

export default Component;
