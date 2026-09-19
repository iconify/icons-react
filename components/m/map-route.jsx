import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exa0pjb_o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exa0pjb_o"/>`,
		"fallback": "gis:map-route",
	});
}

export default Component;
