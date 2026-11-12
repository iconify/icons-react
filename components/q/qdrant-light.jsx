import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2gmwachp.css';
import '../../css/x/xwt0ly2qh.css';
import '../../css/y/ys7g5m00i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2gmwachp"/><path class="xwt0ly2qh"/><path class="ys7g5m00i"/>`,
		"fallback": "selfhst:qdrant-light",
	});
}

export default Component;
