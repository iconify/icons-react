import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/blz16obrf.css';
import '../../css/w/wtkpckvgx.css';
import '../../css/p/pud3dsfvs.css';
import '../../css/o/omnhh-bgl.css';
import '../../css/a/ai4jrgoca.css';
import '../../css/k/k061z977v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="blz16obrf"/><path class="wtkpckvgx"/><path class="pud3dsfvs"/><path class="omnhh-bgl"/><path class="ai4jrgoca"/><path class="k061z977v"/></g>`,
		"fallback": "icon-park:table-file",
	});
}

export default Component;
