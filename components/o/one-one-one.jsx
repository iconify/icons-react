import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxtkoeb2i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxtkoeb2i"/>`,
		"fallback": "pinhead:one-one-one",
	});
}

export default Component;
