import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgoo71jhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgoo71jhe"/>`,
		"fallback": "ri:red-packet-fill",
	});
}

export default Component;
