import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vae5tl_vn.css';
import '../../css/t/tgxo-cukz.css';
import '../../css/u/u0z5bpiqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vae5tl_vn"/><circle class="tgxo-cukz"/><path class="u0z5bpiqr"/></g>`,
		"fallback": "icon-park-outline:timed-mail",
	});
}

export default Component;
