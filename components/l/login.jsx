import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a5xlq5btl.css';
import '../../css/s/seyzirbrl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="a5xlq5btl"/><path class="seyzirbrl"/></g>`,
		"fallback": "icon-park-outline:login",
	});
}

export default Component;
