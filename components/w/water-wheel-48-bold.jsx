import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpob966an.css';
import '../../css/k/kuw8fyi7e.css';
import '../../css/b/bej424b8e.css';
import '../../css/l/lmd5ijbas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpob966an"/><path class="kuw8fyi7e"/><path class="bej424b8e"/><path class="lmd5ijbas"/>`,
		"fallback": "energy-icons:water-wheel-48-bold",
	});
}

export default Component;
