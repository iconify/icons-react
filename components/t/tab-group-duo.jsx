import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfggjic1l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dzfiyxf4x.css';
import '../../css/n/n0yvt0bhv.css';
import '../../css/y/yljxuhu5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wfggjic1l"/><g class="dt0cm9dhy primary"><path class="dzfiyxf4x"/><path class="n0yvt0bhv"/><path class="yljxuhu5w"/></g>`,
		"fallback": "iconaut:tab-group-duo",
	});
}

export default Component;
