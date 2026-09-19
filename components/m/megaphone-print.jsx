import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hgs60_bfy.css';
import '../../css/t/tblh0jktb.css';
import '../../css/m/m0t1-sbxy.css';
import '../../css/t/tidti-sqa.css';
import '../../css/w/wvhts6b9i.css';
import '../../css/r/rx7rvbjsy.css';
import '../../css/o/ovo-jbcet.css';
import '../../css/q/q4kabybjl.css';
import '../../css/p/pw9onfdsf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="hgs60_bfy"/><path clip-rule="evenodd" class="tblh0jktb"/><path class="m0t1-sbxy"/><path clip-rule="evenodd" class="tidti-sqa"/><path class="wvhts6b9i"/><path clip-rule="evenodd" class="rx7rvbjsy"/></g><path clip-rule="evenodd" class="ovo-jbcet"/><path clip-rule="evenodd" class="q4kabybjl"/><path clip-rule="evenodd" class="pw9onfdsf"/></g>`,
		"fallback": "pepicons:megaphone-print",
	});
}

export default Component;
