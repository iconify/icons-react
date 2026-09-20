import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/it5js_8rn.css';
import '../../css/g/gp0egaclj.css';
import '../../css/h/hwlwzjglt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="it5js_8rn"/><circle class="gp0egaclj"/><path class="hwlwzjglt"/></g>`,
		"fallback": "lucide:switch-camera",
	});
}

export default Component;
