import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/c-0f-jbvg.css';
import '../../css/a/axqh93tjk.css';
import '../../css/a/ajdyn4bhd.css';
import '../../css/q/q9dlovbgr.css';
import '../../css/n/nq3ax75zj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="c-0f-jbvg"/><path class="axqh93tjk"/><path class="ajdyn4bhd"/><path class="q9dlovbgr"/><path class="nq3ax75zj"/></g>`,
		"fallback": "icon-park:multi-function-knife",
	});
}

export default Component;
