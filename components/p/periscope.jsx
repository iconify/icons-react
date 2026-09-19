import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/ii602obty.css';
import '../../css/t/tihccskvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ii602obty"/><path class="tihccskvn"/></g>`,
		"fallback": "hugeicons:periscope",
	});
}

export default Component;
