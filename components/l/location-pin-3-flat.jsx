import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dk94vw9fq.css';
import '../../css/o/oiq1l-bde.css';
import '../../css/f/fxmdazbuy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dk94vw9fq"/><path clip-rule="evenodd" class="oiq1l-bde"/><path class="fxmdazbuy"/></g>`,
		"fallback": "streamline-flex-color:location-pin-3-flat",
	});
}

export default Component;
