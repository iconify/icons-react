import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qopej0bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qopej0bmy"/>`,
		"fallback": "lucide-extended:user-round-star-filled",
	});
}

export default Component;
