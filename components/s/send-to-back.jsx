import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/havf_gbwh.css';
import '../../css/m/m0_mgcrix.css';
import '../../css/e/e_b_kv_oe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="havf_gbwh"/><path class="m0_mgcrix"/><path class="e_b_kv_oe"/></g>`,
		"fallback": "icon-park:send-to-back",
	});
}

export default Component;
