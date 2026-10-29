import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/ounuhul-g.css';
import '../../css/z/z972s-b0h.css';
import '../../css/g/gq5wgor7s.css';
import '../../css/d/dhjxlpbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ounuhul-g wm-deco"/><path class="wm-deco z972s-b0h"/><path class="gq5wgor7s wm-k"/><path class="dhjxlpbbc wm-s"/></g>`,
		"fallback": "withicons:user-cog-blueprint",
	});
}

export default Component;
