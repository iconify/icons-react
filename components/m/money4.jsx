import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/v/vhz0i7kxa.css';
import '../../css/o/om7-_esfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="vhz0i7kxa"/><path class="om7-_esfa"/></g>`,
		"fallback": "reicon:money4",
	});
}

export default Component;
