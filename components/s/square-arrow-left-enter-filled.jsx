import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3lpxulyc.css';
import '../../css/i/i0ekbjbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3lpxulyc"/><path class="i0ekbjbdw"/>`,
		"fallback": "lucide-extended:square-arrow-left-enter-filled",
	});
}

export default Component;
