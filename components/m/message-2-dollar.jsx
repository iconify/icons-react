import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucru8i11o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucru8i11o"/>`,
		"fallback": "tabler:message-2-dollar",
	});
}

export default Component;
