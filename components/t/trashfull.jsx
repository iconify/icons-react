import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufp99g8_h.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufp99g8_h"/>`,
		"fallback": "whh:trashfull",
	});
}

export default Component;
