import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/raxokfpjg.css';
import '../../css/r/rctazlpyi.css';
import '../../css/j/je1iedc_r.css';
import '../../css/r/rwncuda5l.css';
import '../../css/j/jri1li39f.css';
import '../../css/s/ssfpblcca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="raxokfpjg"/><circle class="rctazlpyi"/><circle class="je1iedc_r"/><circle class="rwncuda5l"/><path class="jri1li39f"/><path class="ssfpblcca"/></g>`,
		"fallback": "icon-park:tree-diagram",
	});
}

export default Component;
