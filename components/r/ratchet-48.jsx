import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp-qlgb3c.css';
import '../../css/u/uw0hg1f1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp-qlgb3c"/><path class="uw0hg1f1e"/>`,
		"fallback": "energy-icons:ratchet-48",
	});
}

export default Component;
