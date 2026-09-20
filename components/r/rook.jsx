import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avona7b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avona7b5d"/>`,
		"fallback": "simple-icons:rook",
	});
}

export default Component;
