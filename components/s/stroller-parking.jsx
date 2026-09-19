import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnck5obfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnck5obfa"/>`,
		"fallback": "guidance:stroller-parking",
	});
}

export default Component;
