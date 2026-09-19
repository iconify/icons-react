import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/j/jwge85u5c.css';
import '../../css/t/tk4kmobll.css';
import '../../css/x/xuecegt8s.css';
import '../../css/d/dlxy1wh8t.css';
import '../../css/d/djvltbyzx.css';
import '../../css/m/mt2ko-j5s.css';
import '../../css/e/ehcs1rbma.css';
import '../../css/g/g4ly31k6c.css';
import '../../css/z/zn0-3fbfn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="jwge85u5c"/><path class="tk4kmobll"/><path clip-rule="evenodd" class="xuecegt8s"/><path class="dlxy1wh8t"/><path clip-rule="evenodd" class="djvltbyzx"/><path clip-rule="evenodd" class="mt2ko-j5s"/></g><path clip-rule="evenodd" class="ehcs1rbma"/><path clip-rule="evenodd" class="g4ly31k6c"/><path clip-rule="evenodd" class="zn0-3fbfn"/></g>`,
		"fallback": "pepicons:studio-light-side-print",
	});
}

export default Component;
