import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brxeiy94q.css';
import '../../css/t/ty0pdocra.css';
import '../../css/b/bwx2uacmo.css';
import '../../css/j/jta2-bbba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brxeiy94q"/><path class="ty0pdocra"/><path clip-rule="evenodd" class="bwx2uacmo"/><path clip-rule="evenodd" class="jta2-bbba"/></g>`,
		"fallback": "streamline-color:shipment-add-flat",
	});
}

export default Component;
