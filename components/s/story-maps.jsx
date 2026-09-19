import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl3l4tb-u.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl3l4tb-u"/>`,
		"fallback": "gis:story-maps",
	});
}

export default Component;
