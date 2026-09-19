import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qxewtxvch.css';
import '../../css/t/thamupbae.css';
import '../../css/h/h9b_txtlj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qxewtxvch"/><path class="thamupbae"/><path class="h9b_txtlj"/></g>`,
		"fallback": "icon-park-outline:share-sys",
	});
}

export default Component;
