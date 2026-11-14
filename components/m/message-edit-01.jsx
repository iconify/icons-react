import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ens6xyutt.css';
import '../../css/e/eipj0bg2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ens6xyutt"/><path class="eipj0bg2z"/></g>`,
		"fallback": "hugeicons:message-edit-01",
	});
}

export default Component;
