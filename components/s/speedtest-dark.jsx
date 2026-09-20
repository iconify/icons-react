import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqjreok_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqjreok_h"/>`,
		"fallback": "selfhst:speedtest-dark",
	});
}

export default Component;
