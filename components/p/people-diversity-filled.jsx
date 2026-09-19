import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t89--hbtm.css';
import '../../css/s/sbh-k_brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t89--hbtm"/><path class="sbh-k_brg"/>`,
		"fallback": "boxicons:people-diversity-filled",
	});
}

export default Component;
