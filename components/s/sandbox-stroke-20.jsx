import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxp6gm95j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxp6gm95j"/>`,
		"fallback": "garden:sandbox-stroke-20",
	});
}

export default Component;
