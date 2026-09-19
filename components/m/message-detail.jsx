import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzy0c9c2j.css';
import '../../css/j/j43vdgeku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzy0c9c2j"/><path class="j43vdgeku"/>`,
		"fallback": "boxicons:message-detail",
	});
}

export default Component;
