import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ppkqqlb4r.css';
import '../../css/t/temljv3vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ppkqqlb4r"/><path class="temljv3vn"/></g>`,
		"fallback": "andrsrxn:margin-vertical",
	});
}

export default Component;
