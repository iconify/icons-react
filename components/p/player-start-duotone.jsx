import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9t5albup.css';
import '../../css/e/e1dpcubfa.css';
import '../../css/d/dw8rv-b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g9t5albup"/><path class="e1dpcubfa"/><path class="dw8rv-b5g"/></g>`,
		"fallback": "iconamoon:player-start-duotone",
	});
}

export default Component;
