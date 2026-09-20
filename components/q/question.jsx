import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy5axvbyr.css';
import '../../css/i/ihc-nm-gz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dy5axvbyr"/><circle class="ihc-nm-gz"/></g>`,
		"fallback": "proicons:question",
	});
}

export default Component;
