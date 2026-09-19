import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynr5zrbxp.css';
import '../../css/m/mqa_-ub1a.css';
import '../../css/g/ghy5e64mw.css';
import '../../css/p/pl7f1-bfq.css';
import '../../css/h/h4nr8wacg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ynr5zrbxp"/><path class="mqa_-ub1a"/><circle class="ghy5e64mw"/><circle class="pl7f1-bfq"/><circle class="h4nr8wacg"/></g>`,
		"fallback": "icon-park:washing-machine-one",
	});
}

export default Component;
