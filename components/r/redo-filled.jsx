import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkf6x8b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gkf6x8b6h"/>`,
		"fallback": "reicon:redo-filled",
	});
}

export default Component;
