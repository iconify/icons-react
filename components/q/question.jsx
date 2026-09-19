import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwqybm13b.css';
import '../../css/o/olpgfdb0y.css';
import '../../css/o/olyxe4bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cwqybm13b"/><path class="olpgfdb0y"/><path class="olyxe4bhs"/></g>`,
		"fallback": "hugeicons:question",
	});
}

export default Component;
