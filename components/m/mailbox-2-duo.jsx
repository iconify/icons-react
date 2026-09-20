import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/u/ub3cl0bqb.css';
import '../../css/z/zk-lxac-n.css';
import '../../css/l/lts3lgeai.css';
import '../../css/c/cyysvkbxs.css';
import '../../css/v/v5g2m4bya.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="ub3cl0bqb"/><path class="zk-lxac-n"/><path class="lts3lgeai"/><path class="cyysvkbxs"/><path class="v5g2m4bya"/></g>`,
		"fallback": "streamline-stickies-color:mailbox-2-duo",
	});
}

export default Component;
