import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyikwltxa.css';
import '../../css/v/vfl-qubxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyikwltxa"/><path class="vfl-qubxx"/>`,
		"fallback": "lucide-extended:monitor-smartphone-filled",
	});
}

export default Component;
