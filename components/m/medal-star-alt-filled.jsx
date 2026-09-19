import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkygmcb8t.css';
import '../../css/a/ah052tbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkygmcb8t"/><path class="ah052tbom"/>`,
		"fallback": "boxicons:medal-star-alt-filled",
	});
}

export default Component;
