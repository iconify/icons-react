import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gvg1y4b0c.css';
import '../../css/k/khtt72elu.css';
import '../../css/t/t2x9xbbmy.css';
import '../../css/w/w34xigtyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gvg1y4b0c wm-shadow"/><path class="khtt72elu wm-shadow"/><path class="t2x9xbbmy"/><path class="w34xigtyy"/></g>`,
		"fallback": "withicons-brutal:music-note",
	});
}

export default Component;
