import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf-n3jbtm.css';
import '../../css/p/p2xw8f0_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf-n3jbtm"/><path class="p2xw8f0_d"/>`,
		"fallback": "lucide-extended:trees-filled",
	});
}

export default Component;
