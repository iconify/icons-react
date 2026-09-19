import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pqny5ccrt.css';
import '../../css/i/iuvgjdbsi.css';
import '../../css/x/x6kq82kvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="pqny5ccrt"/><path class="iuvgjdbsi"/><path class="x6kq82kvl"/></g>`,
		"fallback": "hugeicons:mail-minus-01",
	});
}

export default Component;
