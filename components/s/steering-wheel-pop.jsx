import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/z/ztoe1lbpt.css';
import '../../css/v/vwb1p4b1a.css';
import '../../css/k/kuwf84bwp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="ztoe1lbpt"/><path class="vwb1p4b1a"/><path class="kuwf84bwp"/></g>`,
		"fallback": "streamline-kameleon-color:steering-wheel-pop",
	});
}

export default Component;
