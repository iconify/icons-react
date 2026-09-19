import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a76nh6dhy.css';
import '../../css/x/x2e97n8nb.css';
import '../../css/h/h4qjhb_wj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="a76nh6dhy"/><path class="x2e97n8nb"/><path class="h4qjhb_wj"/></g>`,
		"fallback": "icon-park-outline:oval-love",
	});
}

export default Component;
