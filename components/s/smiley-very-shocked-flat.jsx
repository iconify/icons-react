import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tg_h5cpec.css';
import '../../css/w/wqjkrmmjk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tg_h5cpec"/><path class="wqjkrmmjk"/></g>`,
		"fallback": "streamline-color:smiley-very-shocked-flat",
	});
}

export default Component;
