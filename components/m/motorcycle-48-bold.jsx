import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m091oxbzr.css';
import '../../css/p/p-bs16b4r.css';
import '../../css/t/tzmu4f8me.css';
import '../../css/q/qfmb5ts5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m091oxbzr"/><path class="p-bs16b4r"/><path class="tzmu4f8me"/><path class="qfmb5ts5r"/>`,
		"fallback": "energy-icons:motorcycle-48-bold",
	});
}

export default Component;
