import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t0etnac5x.css';
import '../../css/z/zfaq3zbpk.css';
import '../../css/t/thxr7ccjs.css';
import '../../css/y/yb0b6rztf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t0etnac5x"/><path class="zfaq3zbpk"/><path class="thxr7ccjs"/><path class="yb0b6rztf"/></g>`,
		"fallback": "streamline-freehand-color:office-work-wireless",
	});
}

export default Component;
