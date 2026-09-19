import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wxj45vcve.css';
import '../../css/v/vd3atfbcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wxj45vcve"/><path class="vd3atfbcm"/></g>`,
		"fallback": "icon-park-outline:milk-one",
	});
}

export default Component;
