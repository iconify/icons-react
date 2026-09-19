import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hzfrecc0v.css';
import '../../css/e/eb3p7pb0t.css';
import '../../css/h/hjuiqbbkr.css';
import '../../css/a/avwy-abil.css';
import '../../css/r/roty61brl.css';
import '../../css/o/oxveeub8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hzfrecc0v"/><path class="eb3p7pb0t"/><path class="hjuiqbbkr"/><circle class="avwy-abil"/><circle class="roty61brl"/><path class="oxveeub8s"/></g>`,
		"fallback": "icon-park:swimsuit",
	});
}

export default Component;
