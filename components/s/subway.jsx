import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmhu_wbhm.css';
import '../../css/c/cfnmk50zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmhu_wbhm"/><path class="cfnmk50zf"/>`,
		"fallback": "boxicons:subway",
	});
}

export default Component;
