import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dwcesuumr.css';
import '../../css/a/anxs8zbnr.css';
import '../../css/m/midz29bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dwcesuumr"/><rect transform="rotate(90 21.42 13.63)" class="anxs8zbnr"/><rect transform="rotate(90 21.42 13.63)" class="midz29bcc"/></g>`,
		"fallback": "andrsrxn:text-insert-image-down",
	});
}

export default Component;
