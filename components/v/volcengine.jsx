import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vfbzjfbdz.css';
import '../../css/q/qx5pn6bgp.css';
import '../../css/j/jr4g_1b6u.css';
import '../../css/h/h9ubalc1n.css';
import '../../css/h/hxey31b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vfbzjfbdz"/><path clip-rule="evenodd" class="qx5pn6bgp"/><path class="jr4g_1b6u"/><path clip-rule="evenodd" class="h9ubalc1n"/><path class="hxey31b-t"/></g>`,
		"fallback": "thesvg:volcengine",
	});
}

export default Component;
