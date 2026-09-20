import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yilbywqwu.css';
import '../../css/r/rgoffbnwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yilbywqwu"/><path class="rgoffbnwh"/>`,
		"fallback": "selfhst:openvas-light",
	});
}

export default Component;
