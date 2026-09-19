import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqdqq5bqx.css';
import '../../css/z/zbo5r9-vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqdqq5bqx"/><path class="zbo5r9-vq"/></g>`,
		"fallback": "iconamoon:number-6-duotone",
	});
}

export default Component;
