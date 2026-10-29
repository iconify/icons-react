import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mk_-umbdn.css';
import '../../css/g/gz_6osb0u.css';
import '../../css/q/q8kytp3oj.css';
import '../../css/j/ju9gw_pai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mk_-umbdn wm-k"/><path class="gz_6osb0u wm-k"/><path class="q8kytp3oj wm-k"/><path class="ju9gw_pai wm-a"/></g>`,
		"fallback": "withicons:pipette-sketch",
	});
}

export default Component;
