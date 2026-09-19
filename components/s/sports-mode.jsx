import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwvv-yb1g.css';
import '../../css/s/s7_2r_b_x.css';
import '../../css/k/k34urac1b.css';
import '../../css/o/ojzec6byi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uwvv-yb1g"/><path class="s7_2r_b_x"/><path class="k34urac1b"/><path class="ojzec6byi"/>`,
		"fallback": "flat-color-icons:sports-mode",
	});
}

export default Component;
