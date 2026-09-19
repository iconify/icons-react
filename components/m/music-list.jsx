import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yar0blewo.css';
import '../../css/v/vw_edclco.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="yar0blewo"/><path class="vw_edclco"/></g>`,
		"fallback": "icon-park-solid:music-list",
	});
}

export default Component;
