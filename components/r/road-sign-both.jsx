import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jq88istvh.css';
import '../../css/g/gr78cdb7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jq88istvh"/><path class="gr78cdb7s"/></g>`,
		"fallback": "icon-park-solid:road-sign-both",
	});
}

export default Component;
