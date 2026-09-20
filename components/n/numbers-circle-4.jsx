import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/q/qcln40b5r.css';
import '../../css/w/w1-xgibcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="shu3xdl9q"/><circle class="qcln40b5r"/><path class="w1-xgibcl"/></g>`,
		"fallback": "tdesign:numbers-circle-4",
	});
}

export default Component;
