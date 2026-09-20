import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6y0bimrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p6y0bimrf"/>`,
		"fallback": "reicon:list-filled",
	});
}

export default Component;
