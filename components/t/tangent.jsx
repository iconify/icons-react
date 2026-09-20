import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fhuk18_zv.css';
import '../../css/l/lr6y1s3rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fhuk18_zv"/><path class="lr6y1s3rh"/></g>`,
		"fallback": "pixelarticons:tangent",
	});
}

export default Component;
