import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iszq-fbrp.css';
import '../../css/k/k3b73mscw.css';
import '../../css/i/i13dt1b6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iszq-fbrp"/><path class="k3b73mscw"/><path class="i13dt1b6d"/>`,
		"fallback": "energy-icons:sluice-gate-48-bold",
	});
}

export default Component;
