import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/m/moyuhzd7x.css';
import '../../css/u/udkyf1d-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="moyuhzd7x"/><path class="udkyf1d-q"/></g>`,
		"fallback": "tdesign:mosaic",
	});
}

export default Component;
