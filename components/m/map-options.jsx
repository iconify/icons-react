import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebt0b4bjw.css';
import '../../css/j/jpgdedcax.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebt0b4bjw"/><path class="jpgdedcax"/>`,
		"fallback": "gis:map-options",
	});
}

export default Component;
