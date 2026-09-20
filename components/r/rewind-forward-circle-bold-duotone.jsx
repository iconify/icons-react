import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/q/qw3g-jlsi.css';
import '../../css/x/xrja74bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="qw3g-jlsi"/><path class="xrja74bnl"/></g>`,
		"fallback": "solar:rewind-forward-circle-bold-duotone",
	});
}

export default Component;
