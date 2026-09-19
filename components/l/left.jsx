import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdpaesb5u.css';
import '../../css/r/rr_70iyii.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdpaesb5u"/><path class="rr_70iyii"/>`,
		"fallback": "fxemoji:left",
	});
}

export default Component;
