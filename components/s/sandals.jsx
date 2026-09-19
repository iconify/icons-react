import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/n/n6n82mehs.css';
import '../../css/k/kh_xhg-qp.css';
import '../../css/k/kvqu1si6b.css';
import '../../css/l/l5he8sbop.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="n6n82mehs"/><path class="kh_xhg-qp"/><path class="kvqu1si6b"/><path class="l5he8sbop"/></g>`,
		"fallback": "icon-park:sandals",
	});
}

export default Component;
