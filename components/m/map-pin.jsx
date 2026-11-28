import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdf1uzbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdf1uzbvv"/>`,
		"fallback": "noviair:map-pin",
	});
}

export default Component;
