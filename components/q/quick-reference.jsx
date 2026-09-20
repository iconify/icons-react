import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-gufo90d.css';
import '../../css/v/vvd0k01le.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-gufo90d"/><path class="vvd0k01le"/>`,
		"fallback": "selfhst:quick-reference",
	});
}

export default Component;
