import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l179bincs.css';
import '../../css/p/pd_h9evnz.css';
import '../../css/w/wjynhmb7l.css';
import '../../css/x/xm2_-ibkn.css';
import '../../css/z/zv1--mbao.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l179bincs"/><path class="pd_h9evnz"/><path class="wjynhmb7l"/><path class="xm2_-ibkn"/><path class="zv1--mbao"/>`,
		"fallback": "energy-icons:water-pump-20-bold",
	});
}

export default Component;
