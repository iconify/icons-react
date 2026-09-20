import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhhrdnbdd.css';
import '../../css/j/jvzdvxe0d.css';
import '../../css/g/gostswj0s.css';
import '../../css/o/oiz0e4b9q.css';
import '../../css/n/ndw12zbcv.css';
import '../../css/i/i004q9brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qhhrdnbdd"/><path class="jvzdvxe0d"/><path class="gostswj0s"/><path class="oiz0e4b9q"/><path class="ndw12zbcv"/><path class="i004q9brv"/></g>`,
		"fallback": "streamline-ultimate-color:shooting-rifle-person-aim",
	});
}

export default Component;
