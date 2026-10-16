import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a829lwbpl.css';
import '../../css/n/nk1pwkb6d.css';
import '../../css/h/haixszbjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a829lwbpl"/><path class="nk1pwkb6d"/><path class="haixszbjl"/>`,
		"fallback": "energy-icons:lockout-48",
	});
}

export default Component;
