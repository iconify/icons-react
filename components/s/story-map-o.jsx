import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw99l1bzm.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw99l1bzm"/>`,
		"fallback": "gis:story-map-o",
	});
}

export default Component;
