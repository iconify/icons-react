import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l21zrlb0u.css';
import '../../css/z/z-o29tuwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l21zrlb0u"/><rect class="z-o29tuwp"/></g>`,
		"fallback": "lucide:monitor-smartphone",
	});
}

export default Component;
