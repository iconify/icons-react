import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg-e66htg.css';
import '../../css/a/abmkmib2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg-e66htg"/><path class="abmkmib2w"/>`,
		"fallback": "energy-icons:nozzle-48",
	});
}

export default Component;
