import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgm4fubau.css';
import '../../css/j/jwzetnd5t.css';
import '../../css/y/yi33babfn.css';
import '../../css/j/j35jqnzxv.css';
import '../../css/z/z07zh4b9t.css';
import '../../css/r/rkzo6sbmp.css';
import '../../css/c/c8iyo0joc.css';
import '../../css/s/serb2cbfm.css';
import '../../css/t/t4fg6mbrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hgm4fubau"/><path class="jwzetnd5t"/><path clip-rule="evenodd" class="yi33babfn"/><path class="j35jqnzxv"/><path clip-rule="evenodd" class="z07zh4b9t"/><path class="rkzo6sbmp"/><path clip-rule="evenodd" class="c8iyo0joc"/><path class="serb2cbfm"/><path clip-rule="evenodd" class="t4fg6mbrp"/></g>`,
		"fallback": "healthicons:stent-negative",
	});
}

export default Component;
