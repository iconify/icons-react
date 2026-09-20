import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb3z4vbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb3z4vbcf"/>`,
		"fallback": "simple-icons:oracle",
	});
}

export default Component;
