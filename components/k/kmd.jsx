import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfy-5hqci.css';
import '../../css/x/x0u_kcboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfy-5hqci"/><path class="x0u_kcboi"/>`,
		"fallback": "token:kmd",
	});
}

export default Component;
