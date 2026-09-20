import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll6enqb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll6enqb7y"/>`,
		"fallback": "pixelarticons:more-vertical-sharp",
	});
}

export default Component;
