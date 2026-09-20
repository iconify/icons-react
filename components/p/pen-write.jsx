import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bblhey7vn.css';
import '../../css/z/z_itwpb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bblhey7vn"/><path class="z_itwpb8c"/></g>`,
		"fallback": "streamline-ultimate:pen-write",
	});
}

export default Component;
