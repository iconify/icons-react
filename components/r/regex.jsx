import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/gfnig-b7h.css';
import '../../css/a/a74ox2l4b.css';
import '../../css/l/l-if2ibsb.css';
import '../../css/x/xgzsipblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="gfnig-b7h"/><path class="a74ox2l4b wm-k"/><path class="l-if2ibsb wm-a"/><path class="wm-deco xgzsipblb"/></g>`,
		"fallback": "withicons-kawaii:regex",
	});
}

export default Component;
