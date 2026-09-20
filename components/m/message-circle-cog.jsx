import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt7dxsrju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt7dxsrju"/>`,
		"fallback": "tabler:message-circle-cog",
	});
}

export default Component;
