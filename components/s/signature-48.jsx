import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aawa8wi0p.css';
import '../../css/p/pv-ojy8ch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aawa8wi0p"/><path class="pv-ojy8ch"/>`,
		"fallback": "energy-icons:signature-48",
	});
}

export default Component;
