import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nok8b0muj.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nok8b0muj"/>`,
		"fallback": "si-glyph:sewing-machine",
	});
}

export default Component;
