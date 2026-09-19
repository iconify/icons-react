import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o73s2d9-j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o73s2d9-j"/>`,
		"fallback": "whh:turnleft",
	});
}

export default Component;
