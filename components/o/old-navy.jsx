import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2qsx7eke.css';
import '../../css/e/e32k5njcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="e2qsx7eke"/><path class="e32k5njcx"/>`,
		"fallback": "selfhst:old-navy",
	});
}

export default Component;
