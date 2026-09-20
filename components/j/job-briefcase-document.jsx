import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lezyyqbrb.css';
import '../../css/y/yfyu5b4ac.css';
import '../../css/r/rhuwopb-f.css';
import '../../css/s/sw0djkbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lezyyqbrb"/><path class="yfyu5b4ac"/><path class="rhuwopb-f"/><path class="sw0djkbmk"/></g>`,
		"fallback": "streamline-freehand-color:job-briefcase-document",
	});
}

export default Component;
