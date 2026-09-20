import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rhjky3n3q.css';
import '../../css/b/bos1t2i0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rhjky3n3q"/><path class="bos1t2i0i"/></g>`,
		"fallback": "si:user-alt-line",
	});
}

export default Component;
