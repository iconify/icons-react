import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oww3qkqtf.css';
import '../../css/z/zf5bh8bck.css';
import '../../css/j/jugppdp1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oww3qkqtf"/><path class="zf5bh8bck"/><path class="jugppdp1a"/></g>`,
		"fallback": "andrsrxn:mail-minus",
	});
}

export default Component;
