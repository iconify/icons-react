import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n0c7lpb3l.css';
import '../../css/h/hbjyfybbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n0c7lpb3l"/><path class="hbjyfybbk"/></g>`,
		"fallback": "icon-park:rotation-one",
	});
}

export default Component;
