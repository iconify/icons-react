import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkb7xobyc.css';
import '../../css/a/avbzggl1s.css';
import '../../css/l/l6u_258ql.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkb7xobyc"/><path class="avbzggl1s"/><path class="l6u_258ql"/>`,
		"fallback": "carbon:screen-map-set",
	});
}

export default Component;
