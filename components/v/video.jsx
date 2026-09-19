import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itduwablw.css';
import '../../css/e/eeqboeb7g.css';
import '../../css/l/l6ud8sbvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="itduwablw"/><path class="eeqboeb7g"/><path class="l6ud8sbvl"/></g>`,
		"fallback": "icon-park-outline:video",
	});
}

export default Component;
