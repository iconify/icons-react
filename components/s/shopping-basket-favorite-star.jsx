import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xbl_6z5is.css';
import '../../css/x/xr8dqy-os.css';
import '../../css/d/df7uwvexg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xbl_6z5is"/><path class="xr8dqy-os"/><path class="df7uwvexg"/></g>`,
		"fallback": "streamline-freehand:shopping-basket-favorite-star",
	});
}

export default Component;
