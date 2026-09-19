import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djj-u_w3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djj-u_w3u"/>`,
		"fallback": "icon-park-solid:right-angle",
	});
}

export default Component;
