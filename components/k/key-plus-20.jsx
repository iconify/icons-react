import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu-d0ccoo.css';
import '../../css/v/vlpd_6j7q.css';
import '../../css/l/lpcghzexh.css';
import '../../css/q/qy_x_gaft.css';
import '../../css/e/evng24apc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu-d0ccoo"/><path class="vlpd_6j7q"/><path class="lpcghzexh"/><path class="qy_x_gaft"/><path class="evng24apc"/>`,
		"fallback": "energy-icons:key-plus-20",
	});
}

export default Component;
