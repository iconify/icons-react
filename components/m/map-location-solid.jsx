import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7dtnxsic.css';
import '../../css/s/sega__bro.css';
import '../../css/v/vmfvg5bti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7dtnxsic"/><path clip-rule="evenodd" class="sega__bro"/><path class="vmfvg5bti"/>`,
		"fallback": "basil:map-location-solid",
	});
}

export default Component;
