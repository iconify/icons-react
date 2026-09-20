import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gchj467ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gchj467ff"/>`,
		"fallback": "mingcute:vison-pro-line",
	});
}

export default Component;
