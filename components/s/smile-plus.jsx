import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x4r3srb3i.css';
import '../../css/d/dw8kwrbaz.css';
import '../../css/z/zvqjcz3jn.css';
import '../../css/t/t8dv-w75i.css';
import '../../css/y/y477ikbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow x4r3srb3i"/><path class="dw8kwrbaz wm-shadow"/><path class="zvqjcz3jn"/><path class="t8dv-w75i"/><path class="wm-s y477ikbnp"/></g>`,
		"fallback": "withicons-brutal:smile-plus",
	});
}

export default Component;
