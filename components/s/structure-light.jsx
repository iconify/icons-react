import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ick-u-p3c.css';
import '../../css/h/hgfcm3hgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="ick-u-p3c"/><path class="hgfcm3hgv"/></g>`,
		"fallback": "lets-icons:structure-light",
	});
}

export default Component;
