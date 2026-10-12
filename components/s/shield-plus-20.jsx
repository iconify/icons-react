import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-pj4obxj.css';
import '../../css/c/c6gzs9dks.css';
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
		"content": `<path class="q-pj4obxj"/><path class="c6gzs9dks"/><path class="qy_x_gaft"/><path class="evng24apc"/>`,
		"fallback": "energy-icons:shield-plus-20",
	});
}

export default Component;
