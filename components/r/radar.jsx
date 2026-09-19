import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/k/ki6skwu5m.css';
import '../../css/l/lud_wla_u.css';
import '../../css/t/t33jx3cgu.css';
import '../../css/v/vvnugib5y.css';
import '../../css/p/p_sx7ibve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path clip-rule="evenodd" class="ki6skwu5m"/><path clip-rule="evenodd" class="lud_wla_u"/><path class="t33jx3cgu"/><path class="vvnugib5y"/><path class="p_sx7ibve"/></g>`,
		"fallback": "icon-park:radar",
	});
}

export default Component;
