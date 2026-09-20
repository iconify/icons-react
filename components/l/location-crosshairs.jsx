import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h02-dbbyw.css';
import '../../css/f/f_362pbxn.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h02-dbbyw"/><circle class="f_362pbxn"/><circle class="gp0egaclj"/></g>`,
		"fallback": "meteor-icons:location-crosshairs",
	});
}

export default Component;
