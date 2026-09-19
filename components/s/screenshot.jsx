import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itzld-dbz.css';
import '../../css/m/mdfd69mwt.css';
import '../../css/b/bqb6it_0b.css';
import '../../css/m/m-2iqioyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="itzld-dbz"/><path class="mdfd69mwt"/><path class="bqb6it_0b"/><path class="m-2iqioyf"/></g>`,
		"fallback": "icon-park-outline:screenshot",
	});
}

export default Component;
