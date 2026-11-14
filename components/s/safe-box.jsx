import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yofjl0d0o.css';
import '../../css/u/utnlh1vqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yofjl0d0o"/><path class="utnlh1vqc"/></g>`,
		"fallback": "hugeicons:safe-box",
	});
}

export default Component;
