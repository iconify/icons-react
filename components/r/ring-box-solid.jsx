import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t8mfllb-l.css';
import '../../css/a/aav423snu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t8mfllb-l"/><path class="aav423snu wm-s"/></g>`,
		"fallback": "withicons:ring-box-solid",
	});
}

export default Component;
