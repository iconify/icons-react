import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/tf-qccb0k.css';
import '../../css/v/vlj15hbcf.css';
import '../../css/h/ht1e-0b_d.css';
import '../../css/i/imof6cy3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="tf-qccb0k"/><path class="vlj15hbcf"/><path class="ht1e-0b_d"/><path class="imof6cy3g"/></g>`,
		"fallback": "icon-park:key-one",
	});
}

export default Component;
