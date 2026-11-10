import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou38wj13w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou38wj13w"/>`,
		"fallback": "lucide-extended:user-round-exclamation-point-filled",
	});
}

export default Component;
