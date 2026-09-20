import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgbx3xbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgbx3xbgc"/>`,
		"fallback": "simple-icons:niconico",
	});
}

export default Component;
