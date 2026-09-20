import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq31igpxc.css';
import '../../css/d/dbvt4l0ki.css';
import '../../css/y/yw8_5cb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nq31igpxc"/><path clip-rule="evenodd" class="dbvt4l0ki"/><path clip-rule="evenodd" class="yw8_5cb_b"/></g>`,
		"fallback": "streamline-sharp-color:label-folder-tag-flat",
	});
}

export default Component;
