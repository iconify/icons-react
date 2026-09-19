import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_1es1p0u.css';
import '../../css/i/iny3_db3v.css';
import '../../css/u/uvnpe-bqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_1es1p0u"/><path class="iny3_db3v"/><path class="uvnpe-bqr"/>`,
		"fallback": "ion:logo-buffer",
	});
}

export default Component;
