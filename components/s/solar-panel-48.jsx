import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laksrub_s.css';
import '../../css/n/n_odgsabd.css';
import '../../css/e/ejx72qubu.css';
import '../../css/n/nsnkgmbvl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laksrub_s"/><path class="n_odgsabd"/><path class="ejx72qubu"/><path class="nsnkgmbvl"/>`,
		"fallback": "energy-icons:solar-panel-48",
	});
}

export default Component;
