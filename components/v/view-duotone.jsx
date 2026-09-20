import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5mt8jied.css';
import '../../css/v/v4i2ew1ke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5mt8jied"/><circle class="v4i2ew1ke"/>`,
		"fallback": "lets-icons:view-duotone",
	});
}

export default Component;
