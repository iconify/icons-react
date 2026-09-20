import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eru3r8bgk.css';
import '../../css/h/hbqso48oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eru3r8bgk"/><path class="hbqso48oq"/></g>`,
		"fallback": "streamline-sharp-color:signage-3-flat",
	});
}

export default Component;
