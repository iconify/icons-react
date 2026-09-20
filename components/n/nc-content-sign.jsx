import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ex69hmblk.css';
import '../../css/b/b1wt02bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ex69hmblk"/><path class="b1wt02bdl"/></g>`,
		"fallback": "streamline-ultimate:nc-content-sign",
	});
}

export default Component;
