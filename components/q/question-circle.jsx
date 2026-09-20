import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu23-3bwn.css';
import '../../css/o/obkdnvb0e.css';
import '../../css/q/qh4l7r3-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wu23-3bwn"/><circle class="obkdnvb0e"/><circle class="qh4l7r3-i"/></g>`,
		"fallback": "proicons:question-circle",
	});
}

export default Component;
