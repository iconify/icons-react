import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiyimhb6h.css';
import '../../css/j/jtxralboh.css';
import '../../css/u/uy-17uotp.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/n/njh4w5btz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oiyimhb6h"/><path class="jtxralboh"/><path class="uy-17uotp"/><path class="xjfc-xbtr"/><path class="njh4w5btz"/></g>`,
		"fallback": "streamline-color:smiley-angry",
	});
}

export default Component;
