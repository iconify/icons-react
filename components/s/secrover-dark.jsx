import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emu812b6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emu812b6q"/>`,
		"fallback": "selfhst:secrover-dark",
	});
}

export default Component;
