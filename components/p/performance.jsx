import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pbcpcobla.css';
import '../../css/p/psn25bbxp.css';
import '../../css/w/wv-togb4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="pbcpcobla"/><path class="psn25bbxp"/><path class="wv-togb4q"/></g>`,
		"fallback": "icon-park-outline:performance",
	});
}

export default Component;
