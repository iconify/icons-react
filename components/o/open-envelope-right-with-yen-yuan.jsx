import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3q3sr33k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3q3sr33k"/>`,
		"fallback": "pinhead:open-envelope-right-with-yen-yuan",
	});
}

export default Component;
