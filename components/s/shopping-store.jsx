import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uatu1gbjk.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uatu1gbjk"/>`,
		"fallback": "fontisto:shopping-store",
	});
}

export default Component;
