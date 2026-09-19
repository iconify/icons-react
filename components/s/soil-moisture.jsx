import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy2l6dbtf.css';
import '../../css/m/mmtc1hr0r.css';
import '../../css/u/u24fbtb3s.css';
import '../../css/p/pvis-fbvc.css';
import '../../css/q/qwyxqjp2k.css';
import '../../css/p/pddcmsbna.css';
import '../../css/z/zf1xpabcv.css';
import '../../css/c/c8kuy_ape.css';
import '../../css/w/wq_-rzx7v.css';
import '../../css/x/xhya7b2zf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy2l6dbtf"/><circle class="mmtc1hr0r"/><circle class="u24fbtb3s"/><circle class="pvis-fbvc"/><circle class="qwyxqjp2k"/><circle class="pddcmsbna"/><circle class="zf1xpabcv"/><circle class="c8kuy_ape"/><circle class="wq_-rzx7v"/><path class="xhya7b2zf"/>`,
		"fallback": "carbon:soil-moisture",
	});
}

export default Component;
