import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rup9vbbbk.css';
import '../../css/c/cw_fvrqqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rup9vbbbk"/><path class="cw_fvrqqx"/></g>`,
		"fallback": "streamline-sharp-color:tune-adjust-volume-flat",
	});
}

export default Component;
