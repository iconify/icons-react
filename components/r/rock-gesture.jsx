import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/dv1-ps2zb.css';
import '../../css/k/kuucht3jf.css';
import '../../css/u/u6ii_acob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="dv1-ps2zb"/><rect class="kuucht3jf"/><rect class="u6ii_acob"/></g>`,
		"fallback": "icon-park:rock-gesture",
	});
}

export default Component;
