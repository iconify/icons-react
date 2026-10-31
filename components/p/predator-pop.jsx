import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/r/r8uy_ibch.css';
import '../../css/r/r_5-0fbec.css';
import '../../css/i/iy2khbbxf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="r8uy_ibch"/><path class="r_5-0fbec"/><path class="iy2khbbxf"/></g>`,
		"fallback": "streamline-kameleon-color:predator-pop",
	});
}

export default Component;
