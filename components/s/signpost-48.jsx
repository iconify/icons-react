import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymduf8c4o.css';
import '../../css/s/s0d42ac3u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymduf8c4o"/><path class="s0d42ac3u"/>`,
		"fallback": "energy-icons:signpost-48",
	});
}

export default Component;
