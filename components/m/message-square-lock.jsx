import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eu8vrib5p.css';
import '../../css/w/wslrsl6lx.css';
import '../../css/b/bh4r24j1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eu8vrib5p"/><path class="wslrsl6lx"/><rect class="bh4r24j1q"/></g>`,
		"fallback": "lucide:message-square-lock",
	});
}

export default Component;
