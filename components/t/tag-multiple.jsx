import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxxralbqe.css';
import '../../css/p/pn6ffdb6z.css';
import '../../css/m/mrby1cb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xxxralbqe"/><path class="pn6ffdb6z"/><path class="mrby1cb5j"/></g>`,
		"fallback": "proicons:tag-multiple",
	});
}

export default Component;
