import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/ugmu858cw.css';
import '../../css/j/jroqwgjpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ugmu858cw"/><path class="jroqwgjpq"/></g>`,
		"fallback": "icon-park-solid:music",
	});
}

export default Component;
