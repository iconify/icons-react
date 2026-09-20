import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih0nrxghi.css';
import '../../css/q/qy6r87b-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih0nrxghi"/><path class="qy6r87b-e"/>`,
		"fallback": "uim:left-indent-alt",
	});
}

export default Component;
