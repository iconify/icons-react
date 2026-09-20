import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4kour6em.css';
import '../../css/g/gzgaj-5ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p4kour6em"/><path class="gzgaj-5ot"/></g>`,
		"fallback": "streamline-sharp-color:roller-flat",
	});
}

export default Component;
