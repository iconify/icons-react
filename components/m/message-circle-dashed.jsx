import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vo6e7wiro.css';
import '../../css/g/gfyc_6b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vo6e7wiro"/><path class="gfyc_6b9i"/></g>`,
		"fallback": "hugeicons:message-circle-dashed",
	});
}

export default Component;
