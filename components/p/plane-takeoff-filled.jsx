import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-c_p0b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-c_p0b-e"/>`,
		"fallback": "lucide-extended:plane-takeoff-filled",
	});
}

export default Component;
