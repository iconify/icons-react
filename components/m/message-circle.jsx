import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xplf97p2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xplf97p2d"/>`,
		"fallback": "tabler:message-circle",
	});
}

export default Component;
