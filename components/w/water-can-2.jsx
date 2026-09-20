import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i7pe15bxd.css';
import '../../css/e/ejpimf5ps.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="i7pe15bxd"/><path class="ejpimf5ps"/></g>`,
		"fallback": "marketeq:water-can-2",
	});
}

export default Component;
