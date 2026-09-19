import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laq0t2bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laq0t2bjx"/>`,
		"fallback": "cbi:roomsgarage",
	});
}

export default Component;
