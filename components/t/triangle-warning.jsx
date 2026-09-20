import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pe-ede_jl.css';
import '../../css/e/eof16wb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pe-ede_jl"/><path class="eof16wb5n"/></g>`,
		"fallback": "reicon:triangle-warning",
	});
}

export default Component;
