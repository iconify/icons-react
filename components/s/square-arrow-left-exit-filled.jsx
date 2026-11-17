import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tua-0ebsr.css';
import '../../css/h/h7kltebkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tua-0ebsr"/><path class="h7kltebkz"/>`,
		"fallback": "lucide-extended:square-arrow-left-exit-filled",
	});
}

export default Component;
