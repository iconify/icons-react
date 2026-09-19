import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cdj3i-l1l.css';
import '../../css/n/nic_x0efj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="cdj3i-l1l"/><path class="nic_x0efj"/></g>`,
		"fallback": "icon-park-outline:nail-polish-one",
	});
}

export default Component;
