import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v14h5yb4j.css';
import '../../css/k/k3e90fbez.css';
import '../../css/n/npimc-bag.css';
import '../../css/t/tbee2l8-g.css';
import '../../css/v/v4-vqmvnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v14h5yb4j wm-k"/><path class="k3e90fbez wm-a"/><path class="npimc-bag wm-shadow"/><path class="tbee2l8-g wm-k"/><path class="v4-vqmvnf wm-a"/></g>`,
		"fallback": "withicons:timer-engrave",
	});
}

export default Component;
