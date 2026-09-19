import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pbcpcobla.css';
import '../../css/m/mug27bbbv.css';
import '../../css/w/wv-togb4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="pbcpcobla"/><path class="mug27bbbv"/><path class="wv-togb4q"/></g>`,
		"fallback": "icon-park-solid:performance",
	});
}

export default Component;
