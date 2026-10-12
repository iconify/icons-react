import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0ttc0h5a.css';
import '../../css/q/q8zcs41ij.css';
import '../../css/b/bmhxao8im.css';
import '../../css/i/ikrlizb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0ttc0h5a"/><rect class="q8zcs41ij"/><path class="bmhxao8im"/><path class="ikrlizb7r"/></g>`,
		"fallback": "andrsrxn:passport",
	});
}

export default Component;
