import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhfvpzb8b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhfvpzb8b"/>`,
		"fallback": "glyphs:shoe-print",
	});
}

export default Component;
