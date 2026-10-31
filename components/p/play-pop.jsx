import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/h/hbjah0bga.css';
import '../../css/g/gttptibrp.css';
import '../../css/z/z1y10gbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="hbjah0bga"/><path class="gttptibrp"/><path class="z1y10gbex"/></g>`,
		"fallback": "streamline-kameleon-color:play-pop",
	});
}

export default Component;
