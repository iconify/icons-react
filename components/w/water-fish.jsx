import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he43lx78j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he43lx78j"/>`,
		"fallback": "ix:water-fish",
	});
}

export default Component;
