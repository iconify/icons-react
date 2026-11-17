import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9_asgiqp.css';
import '../../css/l/lznavzkfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9_asgiqp"/><path class="lznavzkfz"/>`,
		"fallback": "lucide-extended:square-arrow-up-left-enter-filled",
	});
}

export default Component;
