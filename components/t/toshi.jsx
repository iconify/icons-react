import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_uqzkbxl.css';
import '../../css/d/dmbs_cc9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_uqzkbxl"/><path class="dmbs_cc9e"/>`,
		"fallback": "token:toshi",
	});
}

export default Component;
