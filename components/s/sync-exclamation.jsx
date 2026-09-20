import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3u6_3b8i.css';
import '../../css/f/fg0j46bvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3u6_3b8i"/><path class="fg0j46bvq"/>`,
		"fallback": "uim:sync-exclamation",
	});
}

export default Component;
