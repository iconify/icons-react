import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf8itkqqh.css';
import '../../css/z/zg1px-b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lf8itkqqh"/><path class="zg1px-b6n"/></g>`,
		"fallback": "reicon:stream-duotone",
	});
}

export default Component;
