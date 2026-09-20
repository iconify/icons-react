import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g35dtkbae.css';
import '../../css/n/n7uvfrbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g35dtkbae"/><path class="n7uvfrbje"/>`,
		"fallback": "mingcute:magic-3-fill",
	});
}

export default Component;
