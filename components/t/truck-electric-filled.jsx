import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/now_6ismn.css';
import '../../css/q/q7s1dob3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="now_6ismn"/><path class="q7s1dob3p"/>`,
		"fallback": "lucide-extended:truck-electric-filled",
	});
}

export default Component;
