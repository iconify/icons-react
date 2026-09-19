import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/eevy8sbod.css';
import '../../css/v/v4nnzevee.css';
import '../../css/d/dnqkrib-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="eevy8sbod"/><path class="v4nnzevee"/><path class="dnqkrib-b"/></g>`,
		"fallback": "hugeicons:mountain-snow",
	});
}

export default Component;
