import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvs4s8b2p.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvs4s8b2p"/>`,
		"fallback": "fa6-solid:user-gear",
	});
}

export default Component;
