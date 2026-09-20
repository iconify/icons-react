import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgzll2bxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgzll2bxu"/>`,
		"fallback": "subway:lock-1",
	});
}

export default Component;
