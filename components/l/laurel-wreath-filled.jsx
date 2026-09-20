import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2d4ctjbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2d4ctjbi"/>`,
		"fallback": "tabler:laurel-wreath-filled",
	});
}

export default Component;
