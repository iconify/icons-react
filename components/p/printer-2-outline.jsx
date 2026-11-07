import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myod-k65i.css';
import '../../css/i/ihkre-bnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myod-k65i"/><path class="ihkre-bnx"/>`,
		"fallback": "solar:printer-2-outline",
	});
}

export default Component;
