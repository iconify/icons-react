import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk5j9gbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk5j9gbjl"/>`,
		"fallback": "pixelarticons:link-sharp",
	});
}

export default Component;
