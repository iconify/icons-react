import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwxkwgb0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwxkwgb0a"/>`,
		"fallback": "selfhst:rancher-k3os",
	});
}

export default Component;
