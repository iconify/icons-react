import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_frcb-c.css';
import '../../css/d/d4idornhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_frcb-c"/><path clip-rule="evenodd" class="d4idornhj"/>`,
		"fallback": "solar:record-square-bold-duotone",
	});
}

export default Component;
