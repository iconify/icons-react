import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2qfbdb0a.css';
import '../../css/n/nsc284b_q.css';
import '../../css/a/argi97bmu.css';
import '../../css/r/rai6xtdfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p2qfbdb0a"/><path class="nsc284b_q"/><path class="argi97bmu"/><path class="rai6xtdfc"/></g>`,
		"fallback": "fluent-emoji-flat:mouse-face",
	});
}

export default Component;
