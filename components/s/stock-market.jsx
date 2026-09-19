import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r0_u64bsr.css';
import '../../css/a/aiajx7ljo.css';
import '../../css/q/q--ykbbgp.css';
import '../../css/r/rle50jbed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r0_u64bsr"/><path class="aiajx7ljo"/><path class="q--ykbbgp"/><path class="rle50jbed"/></g>`,
		"fallback": "icon-park-outline:stock-market",
	});
}

export default Component;
