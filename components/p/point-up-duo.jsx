import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ses441b-t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lma1j-bkv.css';
import '../../css/w/wlqhkwbzb.css';
import '../../css/m/mc9a0ov5s.css';
import '../../css/y/yte00hbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ses441b-t"/><g class="dt0cm9dhy primary"><path class="lma1j-bkv"/><path class="wlqhkwbzb"/><path class="mc9a0ov5s"/><path class="yte00hbxs"/></g>`,
		"fallback": "iconaut:point-up-duo",
	});
}

export default Component;
