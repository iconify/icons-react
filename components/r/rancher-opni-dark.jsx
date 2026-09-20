import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yva4x7ini.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yva4x7ini"/>`,
		"fallback": "selfhst:rancher-opni-dark",
	});
}

export default Component;
