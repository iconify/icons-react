import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zzgr2_bma.css';
import '../../css/b/b6mu38bbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="zzgr2_bma"/><circle class="b6mu38bbk"/></g>`,
		"fallback": "icon-park-outline:read-book",
	});
}

export default Component;
