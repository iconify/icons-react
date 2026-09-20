import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m060p1bup.css';
import '../../css/d/dwlz50b1l.css';
import '../../css/h/h5zq5sxkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m060p1bup"/><path class="dwlz50b1l"/><path class="h5zq5sxkr"/></g>`,
		"fallback": "keyline-icons:panel-left-open-dashed-sharp-duotone",
	});
}

export default Component;
