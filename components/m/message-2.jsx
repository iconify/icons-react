import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6tcy732d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6tcy732d"/>`,
		"fallback": "tabler:message-2",
	});
}

export default Component;
