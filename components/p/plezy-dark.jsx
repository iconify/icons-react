import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy9_b6x2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy9_b6x2j"/>`,
		"fallback": "selfhst:plezy-dark",
	});
}

export default Component;
