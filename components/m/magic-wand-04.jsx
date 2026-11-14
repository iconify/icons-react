import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag2u3nb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag2u3nb2m"/>`,
		"fallback": "hugeicons:magic-wand-04",
	});
}

export default Component;
