import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veh0-ibhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veh0-ibhf"/>`,
		"fallback": "streamline:subtract-1-remix",
	});
}

export default Component;
