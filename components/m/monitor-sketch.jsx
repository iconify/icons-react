import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cvoru2btt.css';
import '../../css/r/r9pevev-u.css';
import '../../css/u/u606cnbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cvoru2btt wm-a"/><path class="r9pevev-u wm-k"/><path class="u606cnbwx wm-a"/></g>`,
		"fallback": "withicons:monitor-sketch",
	});
}

export default Component;
