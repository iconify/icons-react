import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/h/h8h-3cbpv.css';
import '../../css/j/jr-ln5z8r.css';
import '../../css/p/pit1n5bmd.css';
import '../../css/x/x_5u-tb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="h8h-3cbpv"/><path class="jr-ln5z8r"/><path class="pit1n5bmd"/><path class="x_5u-tb1v"/>`,
		"fallback": "solar:maximize-square-2-bold-duotone",
	});
}

export default Component;
