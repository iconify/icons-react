import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cwm09osvy.css';
import '../../css/n/nge5cfbll.css';
import '../../css/j/j_nvheylj.css';
import '../../css/e/eo0rpbb9k.css';
import '../../css/t/ttmkzl54o.css';
import '../../css/j/j1prv893l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cwm09osvy wm-deco"/><path class="nge5cfbll wm-deco"/><path class="j_nvheylj wm-k"/><path class="eo0rpbb9k wm-a"/><path class="ttmkzl54o wm-k"/><path class="j1prv893l wm-a"/></g>`,
		"fallback": "withicons:signature-blueprint",
	});
}

export default Component;
