import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ow2ql5bqu.css';
import '../../css/d/d250fdbcq.css';
import '../../css/o/onl5habgw.css';
import '../../css/n/nhmm4pbny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ow2ql5bqu"/><path clip-rule="evenodd" class="d250fdbcq"/><path class="onl5habgw"/><path clip-rule="evenodd" class="nhmm4pbny"/></g>`,
		"fallback": "healthicons:nurse2x-outline",
	});
}

export default Component;
