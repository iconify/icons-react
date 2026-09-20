import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7e9t3b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7e9t3b8u"/>`,
		"fallback": "tabler:message-circle-x",
	});
}

export default Component;
