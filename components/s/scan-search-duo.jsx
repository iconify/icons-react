import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uavbc3p_l.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/e/epabx8bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uavbc3p_l wm-a"/><path class="l9lv5_bcf"/><path class="epabx8bdv wm-a"/></g>`,
		"fallback": "withicons:scan-search-duo",
	});
}

export default Component;
