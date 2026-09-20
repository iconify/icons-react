import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld2obir9l.css';
import '../../css/m/m0skqlive.css';
import '../../css/y/y3qwz-68w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ld2obir9l"/><path class="m0skqlive"/><path class="y3qwz-68w"/></g>`,
		"fallback": "streamline-ultimate-color:share-2",
	});
}

export default Component;
