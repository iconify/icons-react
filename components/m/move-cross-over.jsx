import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u5yaywbpp.css';
import '../../css/z/zbxt1-buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u5yaywbpp"/><path class="zbxt1-buw"/></g>`,
		"fallback": "streamline-freehand-color:move-cross-over",
	});
}

export default Component;
