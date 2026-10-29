import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe_yj2gmv.css';
import '../../css/m/m6_8tzbzx.css';
import '../../css/l/lv8wzrvsk.css';
import '../../css/n/nsaobjj4n.css';
import '../../css/b/b_u8-y3gn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe_yj2gmv wm-k"/><path class="m6_8tzbzx wm-a"/><path class="lv8wzrvsk wm-k"/><path class="nsaobjj4n wm-k"/><path class="b_u8-y3gn wm-a"/>`,
		"fallback": "withicons-bauhaus:school",
	});
}

export default Component;
