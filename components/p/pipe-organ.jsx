import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oms87jhuh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oms87jhuh"/>`,
		"fallback": "game-icons:pipe-organ",
	});
}

export default Component;
