import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih0nrxghi.css';
import '../../css/v/ve2abo9wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih0nrxghi"/><path class="ve2abo9wm"/>`,
		"fallback": "uim:right-indent-alt",
	});
}

export default Component;
