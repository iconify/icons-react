import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaf37bbnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaf37bbnc"/>`,
		"fallback": "selfhst:sure-finance-dark",
	});
}

export default Component;
