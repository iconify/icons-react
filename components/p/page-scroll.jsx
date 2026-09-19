import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp_ojgx_e.css';
import '../../css/q/q-roxqdob.css';
import '../../css/o/oc7q7_bck.css';
import '../../css/k/kgeui_bzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp_ojgx_e"/><path class="q-roxqdob"/><path class="oc7q7_bck"/><path class="kgeui_bzu"/>`,
		"fallback": "carbon:page-scroll",
	});
}

export default Component;
