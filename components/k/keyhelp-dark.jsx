import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz3u5f60f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz3u5f60f"/>`,
		"fallback": "selfhst:keyhelp-dark",
	});
}

export default Component;
