import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmv_a2yqj.css';
import '../../css/i/ikqbsqkky.css';
import '../../css/k/kwwjy76oi.css';
import '../../css/e/e0kgqbcyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmv_a2yqj"/><path class="ikqbsqkky"/><path class="kwwjy76oi"/><path class="e0kgqbcyl"/>`,
		"fallback": "energy-icons:permafrost-48",
	});
}

export default Component;
