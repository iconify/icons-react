import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r3uyncqxs.css';
import '../../css/d/dyzltge-g.css';
import '../../css/r/rqniv96bp.css';
import '../../css/m/m9c61dktf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r3uyncqxs"/><path class="dyzltge-g"/><path class="rqniv96bp"/><path class="m9c61dktf"/></g>`,
		"fallback": "healthicons:medical-sample2x-outline",
	});
}

export default Component;
