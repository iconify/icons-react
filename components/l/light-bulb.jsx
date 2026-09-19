import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acxe7qz5s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acxe7qz5s"/>`,
		"fallback": "si-glyph:light-bulb",
	});
}

export default Component;
