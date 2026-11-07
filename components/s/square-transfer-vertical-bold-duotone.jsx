import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/t/tfaaafg5o.css';
import '../../css/f/f5bhupbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="tfaaafg5o"/><path class="f5bhupbyu"/>`,
		"fallback": "solar:square-transfer-vertical-bold-duotone",
	});
}

export default Component;
