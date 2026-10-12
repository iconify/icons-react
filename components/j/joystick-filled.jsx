import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omp774b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omp774b7q"/>`,
		"fallback": "lucide-extended:joystick-filled",
	});
}

export default Component;
