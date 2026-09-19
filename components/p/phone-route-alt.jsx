import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylugypbul.css';
import '../../css/h/h35_vrvxl.css';
import '../../css/n/nevl0ie7p.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylugypbul"/><path class="h35_vrvxl"/><path class="nevl0ie7p"/>`,
		"fallback": "gis:phone-route-alt",
	});
}

export default Component;
