import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db2i566jf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db2i566jf"/>`,
		"fallback": "pinhead:vending-machine-with-cigarette-with-smoke-curl",
	});
}

export default Component;
