import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewty_0bgi.css';
import '../../css/o/od1_pacpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ewty_0bgi"/><path class="od1_pacpq"/></g>`,
		"fallback": "lucide:square-arrow-right-exit",
	});
}

export default Component;
