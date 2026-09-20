import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqhm_g3mz.css';
import '../../css/k/krpu0b43w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jqhm_g3mz"/><path class="krpu0b43w"/></g>`,
		"fallback": "si:ticket-alt-1-duotone",
	});
}

export default Component;
