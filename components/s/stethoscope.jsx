import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i50z21glt.css';
import '../../css/g/gl_4f3btr.css';
import '../../css/w/w51jg8bgx.css';
import '../../css/g/gdeacjn3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i50z21glt wm-shadow"/><path class="gl_4f3btr wm-shadow"/><path class="w51jg8bgx"/><path class="gdeacjn3l"/></g>`,
		"fallback": "withicons-brutal:stethoscope",
	});
}

export default Component;
