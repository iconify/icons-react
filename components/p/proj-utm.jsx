import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w49wkhbbb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w49wkhbbb"/>`,
		"fallback": "gis:proj-utm",
	});
}

export default Component;
