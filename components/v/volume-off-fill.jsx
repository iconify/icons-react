import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irpme3b0m.css';
import '../../css/h/hetvd6utf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irpme3b0m"/><path class="hetvd6utf"/>`,
		"fallback": "eva:volume-off-fill",
	});
}

export default Component;
