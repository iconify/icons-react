import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh10bubme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh10bubme"/>`,
		"fallback": "mingcute:maya-pyramids-line",
	});
}

export default Component;
