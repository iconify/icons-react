import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpyifib8k.css';
import '../../css/t/t3t6arbwz.css';
import '../../css/t/t1z169cnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpyifib8k"/><path class="t3t6arbwz"/><path class="t1z169cnf"/>`,
		"fallback": "lucide-extended:phone-call-filled",
	});
}

export default Component;
