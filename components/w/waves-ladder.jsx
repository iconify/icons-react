import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4mvd_x-x.css';
import '../../css/w/w3efpix1t.css';
import '../../css/y/ydrs0ob2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a4mvd_x-x"/><path class="w3efpix1t"/><path class="ydrs0ob2l"/></g>`,
		"fallback": "lucide:waves-ladder",
	});
}

export default Component;
