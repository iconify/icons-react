import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t_u4t-ivi.css';
import '../../css/m/mjirrrblx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t_u4t-ivi"/><path class="mjirrrblx"/></g>`,
		"fallback": "icon-park-outline:socks",
	});
}

export default Component;
