import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leae0xb0m.css';

const viewBox = {"width":184.84,"height":59.76};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leae0xb0m"/>`,
		"fallback": "thesvg-color:powerade",
	});
}

export default Component;
