import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/v_h3ujbrz.css';
import '../../css/g/gpho4gepl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="v_h3ujbrz"/><path class="gpho4gepl"/></g>`,
		"fallback": "icon-park-outline:umbrella-one",
	});
}

export default Component;
