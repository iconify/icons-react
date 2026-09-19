import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hutp1dbom.css';
import '../../css/p/ph2fqzbun.css';
import '../../css/c/cyzl07bjn.css';
import '../../css/e/eyjrslxga.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hutp1dbom"/><path class="ph2fqzbun"/><path class="cyzl07bjn"/><path class="eyjrslxga"/></g>`,
		"fallback": "icon-park:security",
	});
}

export default Component;
