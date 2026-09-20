import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_wqocc5e.css';
import '../../css/t/to43f9xmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_wqocc5e"/><path clip-rule="evenodd" class="to43f9xmf"/></g>`,
		"fallback": "streamline-sharp-color:office-building-2-flat",
	});
}

export default Component;
