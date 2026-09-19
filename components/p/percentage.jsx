import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/clqddfbhz.css';
import '../../css/b/b_grjgmus.css';
import '../../css/o/opakkwbyw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="clqddfbhz"/><circle class="b_grjgmus"/><path class="opakkwbyw"/></g>`,
		"fallback": "icon-park:percentage",
	});
}

export default Component;
