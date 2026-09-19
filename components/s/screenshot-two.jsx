import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s3yqy7b9h.css';
import '../../css/x/xh0dfb2xp.css';
import '../../css/s/sudmfg4_x.css';
import '../../css/m/mvwn57bab.css';
import '../../css/a/azgtz4rsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="s3yqy7b9h"/><path clip-rule="evenodd" class="xh0dfb2xp"/><path class="sudmfg4_x"/><path clip-rule="evenodd" class="mvwn57bab"/><path class="azgtz4rsq"/></g>`,
		"fallback": "icon-park:screenshot-two",
	});
}

export default Component;
