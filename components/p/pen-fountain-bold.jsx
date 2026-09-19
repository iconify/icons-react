import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tse4dim5c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tse4dim5c"/>`,
		"fallback": "glyphs:pen-fountain-bold",
	});
}

export default Component;
