import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibyn8xbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibyn8xbtu"/>`,
		"fallback": "coolicons:user-edit-corner-fill-round",
	});
}

export default Component;
