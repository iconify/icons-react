import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qtri30bwf.css';
import '../../css/o/of-q9pmki.css';
import '../../css/c/cbh5v1b3e.css';
import '../../css/v/vqt79abkz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qtri30bwf"/><path class="of-q9pmki"/><path class="cbh5v1b3e"/><path class="vqt79abkz"/></g>`,
		"fallback": "icon-park:menu-fold",
	});
}

export default Component;
