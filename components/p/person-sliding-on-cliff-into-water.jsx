import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1uhn8dbk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1uhn8dbk"/>`,
		"fallback": "pinhead:person-sliding-on-cliff-into-water",
	});
}

export default Component;
