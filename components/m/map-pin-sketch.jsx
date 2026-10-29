import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b0pqdwr_b.css';
import '../../css/b/b5-ak3bmg.css';
import '../../css/h/hkvageoyh.css';
import '../../css/l/l5qqg4j2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b0pqdwr_b"/><path class="b5-ak3bmg wm-k"/><path class="hkvageoyh wm-k"/><path class="l5qqg4j2j wm-a"/></g>`,
		"fallback": "withicons:map-pin-sketch",
	});
}

export default Component;
