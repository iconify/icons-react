import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0ttc0h5a.css';
import '../../css/i/ium5jsb-e.css';
import '../../css/l/lw235-qjo.css';
import '../../css/i/ikrlizb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0ttc0h5a"/><path class="ium5jsb-e"/><path class="lw235-qjo"/><path class="ikrlizb7r"/></g>`,
		"fallback": "andrsrxn:passport",
	});
}

export default Component;
