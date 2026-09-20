import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zx1h81b2d.css';
import '../../css/i/ivzu3flia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zx1h81b2d"/><path class="ivzu3flia"/></g>`,
		"fallback": "reicon:logout6-filled",
	});
}

export default Component;
