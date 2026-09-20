import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms5fjbcnx.css';
import '../../css/c/c8oz1ac5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms5fjbcnx"/><path class="c8oz1ac5e"/>`,
		"fallback": "selfhst:streamystats-dark",
	});
}

export default Component;
