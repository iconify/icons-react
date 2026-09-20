import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/hpxwkjb2l.css';
import '../../css/n/ndp5qxwlx.css';
import '../../css/x/xgmd2ac1w.css';
import '../../css/b/btgv8ubpi.css';
import '../../css/p/pszy_4b0t.css';
import '../../css/j/j4-krt-9e.css';
import '../../css/v/v2z71xb6c.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="hpxwkjb2l"/><path clip-rule="evenodd" class="ndp5qxwlx"/><path clip-rule="evenodd" class="xgmd2ac1w"/><path clip-rule="evenodd" class="btgv8ubpi"/></g><path class="pszy_4b0t"/><path clip-rule="evenodd" class="j4-krt-9e"/><path clip-rule="evenodd" class="v2z71xb6c"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:question-circle",
	});
}

export default Component;
