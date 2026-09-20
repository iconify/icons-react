import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/im0zfkbsh.css';
import '../../css/f/fnan11f_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="im0zfkbsh"/><path class="fnan11f_a"/></g>`,
		"fallback": "streamline-plump-color:magnet-flat",
	});
}

export default Component;
