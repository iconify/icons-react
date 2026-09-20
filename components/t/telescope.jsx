import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpfos8bev.css';
import '../../css/e/e29uf1b8c.css';
import '../../css/b/bcnu-pbyh.css';
import '../../css/h/hjcym577p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lpfos8bev"/><path class="e29uf1b8c"/><path class="bcnu-pbyh"/><path class="hjcym577p"/></g>`,
		"fallback": "streamline-color:telescope",
	});
}

export default Component;
