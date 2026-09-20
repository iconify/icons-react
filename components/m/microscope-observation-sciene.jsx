import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkvdnui8p.css';
import '../../css/i/ivietybzz.css';
import '../../css/x/xo0y53bnd.css';
import '../../css/t/t2bz-uosb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hkvdnui8p"/><path class="ivietybzz"/><path class="xo0y53bnd"/><path class="t2bz-uosb"/></g>`,
		"fallback": "streamline-color:microscope-observation-sciene",
	});
}

export default Component;
