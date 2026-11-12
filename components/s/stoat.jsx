import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycbseobgb.css';
import '../../css/e/e8nzz-tvq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ycbseobgb"/><path class="e8nzz-tvq"/>`,
		"fallback": "selfhst:stoat",
	});
}

export default Component;
