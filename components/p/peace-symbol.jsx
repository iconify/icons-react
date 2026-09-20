import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/x/xf22utbom.css';
import '../../css/w/wu2wg8b9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="xf22utbom"/><path class="wu2wg8b9y"/></g>`,
		"fallback": "streamline-sharp-color:peace-symbol",
	});
}

export default Component;
