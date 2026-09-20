import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9i2nublj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9i2nublj"/>`,
		"fallback": "radix-icons:stop",
	});
}

export default Component;
