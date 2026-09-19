import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lod2qkq7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lod2qkq7c"/>`,
		"fallback": "hugeicons:join-bevel",
	});
}

export default Component;
