import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dakttpbwl.css';
import '../../css/p/px2snqh4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dakttpbwl"/><circle class="px2snqh4c"/></g>`,
		"fallback": "lucide:location-edit",
	});
}

export default Component;
