import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dqoyheszf.css';
import '../../css/b/bnocezqbt.css';
import '../../css/z/zvlywgbxr.css';
import '../../css/u/u9mcuywun.css';
import '../../css/e/erb2_xbut.css';
import '../../css/u/ug5-wlbch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dqoyheszf"/><path class="bnocezqbt"/><path class="zvlywgbxr"/><path class="u9mcuywun"/><path class="erb2_xbut"/><path class="ug5-wlbch"/></g>`,
		"fallback": "icon-park:payment-method",
	});
}

export default Component;
