import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po_1dfsdy.css';
import '../../css/i/i17ii8nyw.css';
import '../../css/y/y8w0wpbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po_1dfsdy"/><path class="i17ii8nyw"/><path class="y8w0wpbkm"/>`,
		"fallback": "typcn:social-youtube-circular",
	});
}

export default Component;
