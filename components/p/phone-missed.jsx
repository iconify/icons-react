import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/olb01jbjz.css';
import '../../css/f/fn7ur3xjf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="olb01jbjz"/><path class="fn7ur3xjf"/></g>`,
		"fallback": "icon-park-outline:phone-missed",
	});
}

export default Component;
