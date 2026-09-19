import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gyl35ga7g.css';
import '../../css/o/odhm74bfl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gyl35ga7g"/><path class="odhm74bfl"/></g>`,
		"fallback": "icon-park-solid:send-backward",
	});
}

export default Component;
