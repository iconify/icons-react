import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgnv8ebcv.css';
import '../../css/r/rrkrpelya.css';
import '../../css/p/ptym6unom.css';
import '../../css/o/okygb9b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cgnv8ebcv"/><path class="rrkrpelya"/><path class="ptym6unom"/><path class="okygb9b9t"/></g>`,
		"fallback": "tdesign:map-double",
	});
}

export default Component;
