import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/del0unbef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="del0unbef"/>`,
		"fallback": "selfhst:nzbget-dark",
	});
}

export default Component;
