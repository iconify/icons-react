import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv72ichwa.css';
import '../../css/r/r14-wv_-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv72ichwa"/><path class="r14-wv_-r"/>`,
		"fallback": "lucide-extended:screen-share-off-filled",
	});
}

export default Component;
