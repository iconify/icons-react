import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1ayl8bhm.css';
import '../../css/w/wf0j1sc4d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1ayl8bhm"/><path class="wf0j1sc4d"/>`,
		"fallback": "energy-icons:pipe-insulation-48",
	});
}

export default Component;
