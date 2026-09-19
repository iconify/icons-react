import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b994on6ok.css';
import '../../css/n/n50kjvxhj.css';
import '../../css/q/qcvonpbgd.css';
import '../../css/h/hlgx7nbpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="b994on6ok"/><rect class="n50kjvxhj"/><path class="qcvonpbgd"/><path class="hlgx7nbpi"/></g>`,
		"fallback": "icon-park:juice",
	});
}

export default Component;
