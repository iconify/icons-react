import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hefw3cljd.css';
import '../../css/x/xhk_mc6oq.css';
import '../../css/r/rxh45yboa.css';
import '../../css/z/zutar_igj.css';
import '../../css/i/isw4nc9ay.css';
import '../../css/a/apj9gabkn.css';
import '../../css/n/n4yiu1b4m.css';
import '../../css/k/kg0hrjbrd.css';
import '../../css/j/jwbynob7j.css';
import '../../css/u/up4r6t9iz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hefw3cljd"/><path class="xhk_mc6oq"/><path class="rxh45yboa"/><path class="zutar_igj"/><path class="isw4nc9ay"/><path class="apj9gabkn"/><path class="n4yiu1b4m"/><path class="kg0hrjbrd"/><path class="jwbynob7j"/><path class="up4r6t9iz"/></g>`,
		"fallback": "fluent-emoji-flat:motorcycle",
	});
}

export default Component;
