import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0ips-hnl.css';
import '../../css/f/f2vy__bko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0ips-hnl"/><path class="f2vy__bko"/>`,
		"fallback": "lucide-extended:trash-off-filled",
	});
}

export default Component;
