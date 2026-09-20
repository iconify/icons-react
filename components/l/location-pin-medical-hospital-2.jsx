import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aon36bczk.css';
import '../../css/h/h5lxd7bxk.css';
import '../../css/a/ahcl2lbst.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aon36bczk"/><path class="h5lxd7bxk"/><path class="ahcl2lbst"/></g>`,
		"fallback": "streamline-flex-color:location-pin-medical-hospital-2",
	});
}

export default Component;
