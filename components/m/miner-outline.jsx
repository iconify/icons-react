import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gng9uo35b.css';
import '../../css/e/e648ybc7c.css';
import '../../css/c/ce7nwidet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="gng9uo35b"/><path clip-rule="evenodd" class="e648ybc7c"/><path class="ce7nwidet"/></g>`,
		"fallback": "bitcoin-icons:miner-outline",
	});
}

export default Component;
