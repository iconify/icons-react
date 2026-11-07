import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ophijtbsv.css';
import '../../css/q/qg1_u7bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ophijtbsv"/><path class="qg1_u7bwc"/>`,
		"fallback": "solar:list-down-bold-duotone",
	});
}

export default Component;
