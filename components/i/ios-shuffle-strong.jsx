import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj3y0cblt.css';
import '../../css/v/v2096mbgt.css';
import '../../css/g/gr_mehv_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj3y0cblt"/><path class="v2096mbgt"/><path class="gr_mehv_y"/>`,
		"fallback": "ion:ios-shuffle-strong",
	});
}

export default Component;
