import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m1e1revmv.css';
import '../../css/q/qzn_ctbxq.css';
import '../../css/j/jac47ganm.css';
import '../../css/q/qiqn0dn5q.css';
import '../../css/m/mq-ynobqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m1e1revmv"/><path class="qzn_ctbxq wm-k"/><path class="jac47ganm wm-a"/><path class="qiqn0dn5q wm-k"/><path class="mq-ynobqs wm-a"/></g>`,
		"fallback": "withicons:wallet-cards-sketch",
	});
}

export default Component;
