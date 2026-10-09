import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p40y1yr6g.css';
import '../../css/b/brao9d3ic.css';
import '../../css/q/q0h_mcezk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p40y1yr6g"/><path class="brao9d3ic"/><path class="q0h_mcezk"/>`,
		"fallback": "energy-icons:printer-48",
	});
}

export default Component;
