import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll6i8wx_a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll6i8wx_a"/>`,
		"fallback": "radix-icons:laptop",
	});
}

export default Component;
