import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfa1y2pwb.css';
import '../../css/l/l_fae7rzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfa1y2pwb"/><path class="l_fae7rzf"/>`,
		"fallback": "lucide-extended:shredder-filled",
	});
}

export default Component;
