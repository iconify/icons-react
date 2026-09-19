import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/obh8punla.css';
import '../../css/j/jon9p6f8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="obh8punla"/><path class="jon9p6f8b"/></g>`,
		"fallback": "hugeicons:orientation-image-potrait-to-landscape",
	});
}

export default Component;
