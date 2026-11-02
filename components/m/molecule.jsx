import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/y3yb-vjox.css';
import '../../css/v/vkgnsyjth.css';
import '../../css/y/yii9ybcel.css';
import '../../css/h/h5w_6ac9s.css';
import '../../css/o/opf-24bnr.css';
import '../../css/g/g0des0bko.css';
import '../../css/h/hmaq185tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="y3yb-vjox"/><path class="vkgnsyjth"/><path class="yii9ybcel"/><path class="h5w_6ac9s"/><path class="opf-24bnr"/><path class="g0des0bko"/><path class="hmaq185tn"/></g>`,
		"fallback": "matita:molecule",
	});
}

export default Component;
