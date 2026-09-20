import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj0fax-7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj0fax-7q"/>`,
		"fallback": "pixelarticons:potion-sharp",
	});
}

export default Component;
