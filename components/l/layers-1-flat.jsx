import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pq8zusbbx.css';
import '../../css/l/lpnoqnbdr.css';
import '../../css/p/pccynk81j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pq8zusbbx"/><path class="lpnoqnbdr"/><path class="pccynk81j"/></g>`,
		"fallback": "streamline-color:layers-1-flat",
	});
}

export default Component;
