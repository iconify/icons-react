import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc-w-0b1k.css';
import '../../css/r/rihw2qt5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc-w-0b1k"/><path class="rihw2qt5j"/>`,
		"fallback": "mingcute:traffic-lights-line",
	});
}

export default Component;
