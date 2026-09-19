import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpq-7-bmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpq-7-bmc"/>`,
		"fallback": "icon-park-outline:text-rotation-left",
	});
}

export default Component;
